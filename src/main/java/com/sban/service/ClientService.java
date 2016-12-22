package com.sban.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.sban.db.entity.Client;
import com.sban.db.repository.ClientRepository;
import com.sban.model.ClientForm;

/**
 * That class was created by Mikolaj Matejko
 * on 02.09.2016 23:08 as part of spring-boot-angular2 project.
 */
@Service
public class ClientService {

    private final ClientMapper clientMapper;
    private final ClientRepository clientRepository;

    public ClientService(ClientMapper clientMapper, ClientRepository clientRepository) {
        this.clientMapper = clientMapper;
        this.clientRepository = clientRepository;
    }

    public boolean addClient(ClientForm obj) {
        return null != clientRepository.save(clientMapper.clientFormToClient(obj));
    }

    public boolean clientnameAvailable(String clientname) {
        return null == clientRepository.findByNameIgnoreCase(clientname);
    }
    
	public List<Client> getAllClients() {
		List<Client> listOfCLients =clientRepository.findAll();
		return listOfCLients;
	}
	
	public Client getClient(Long id) {
		Client client = clientRepository.findByIdAndFetchCommandes(id);
		return client;
	}

    public void removeClient(Long id){
    	 clientRepository.delete(id);
    }
    
    public boolean addressAvailable(String address) {
        return null == clientRepository.findByAddressIgnoreCase(address);
    }
    
    public boolean nameAvailable(String name) {
        return null == clientRepository.findByNameIgnoreCase(name);
    }
    
}
