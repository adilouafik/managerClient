package com.sban.service;

import java.util.List;

import org.joda.time.LocalDate;
import org.springframework.stereotype.Service;

import com.sban.db.entity.Commande;
import com.sban.db.repository.ClientRepository;
import com.sban.db.repository.CommandeRepository;
import com.sban.model.CommandeForm;

/**
 * That class was created by bousarehane hicham
 * on 02.09.2016 23:08 as part of spring-boot-angular2 project.
 */
@Service
public class CommandeService {

    private final CommandeMapper commandeMapper;
    private final CommandeRepository commandeRepository;
    private final ClientRepository clientRepository;
    private final ClientMapper clientMapper;

	public CommandeService(CommandeMapper commandeMapper, CommandeRepository commandeRepository, ClientMapper clientMapper , ClientRepository clientRepository) {
		this.commandeMapper = commandeMapper;
		this.commandeRepository = commandeRepository;
		this.clientMapper = clientMapper;
		this.clientRepository = clientRepository;
	}

	public boolean addCommande(CommandeForm obj) {
		Commande commande = new Commande();
		commande.setNumero(obj.getNumero());
		commande.setClient(clientRepository.findOne(Long.valueOf(obj.getClientMap())));
		LocalDate myDate = new LocalDate(obj.getDateTimeCommande());
		commande.setDateTimeCommande(myDate);
		return null != commandeRepository.save(commande);
	}

    public boolean commandenumeroAvailable(String commandename) {
        return null == commandeRepository.findByNumeroIgnoreCase(commandename);
    }
    
	public List<Commande> getAllCommandes() {
		return commandeRepository.findAll();
	}
	
	public Commande getCommande(Long id) {
		return commandeRepository.findOne(id);
	}

    public void removeCommande(Long id){
    	 commandeRepository.delete(id);
    }
}
