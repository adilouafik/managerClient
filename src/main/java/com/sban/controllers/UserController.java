package com.sban.controllers;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sban.Log;
import com.sban.db.entity.Client;
import com.sban.db.entity.Commande;
import com.sban.model.ClientForm;
import com.sban.model.CommandeForm;
import com.sban.model.LoginForm;
import com.sban.model.RegisterForm;
import com.sban.service.ClientService;
import com.sban.service.CommandeService;
import com.sban.service.UserService;

/**
 * That class was created by Bousarehane Hicham
 * on 23.09.2016 18:43 as part of spring-boot-angular2 project.
 */
@RestController
public class UserController {
	
	private static @Log Logger LOG;

    private final UserService userService;
    
    private final  ClientService clientService;
    
    private final  CommandeService commandeService;
    

	public UserController(UserService userService, ClientService clientService, CommandeService commandeService) {
		this.userService = userService;
		this.clientService = clientService;
		this.commandeService = commandeService;
	}

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> register(@RequestBody @Valid RegisterForm obj) {
		LOG.info("register a new user  --------------------");
		boolean registerInBase = userService.register(obj);
		return registerInBase ? new ResponseEntity<>(HttpStatus.CREATED) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> login(@RequestBody @Valid LoginForm obj) {
        Map<String, String> body = new HashMap<>();
        body.put("login", "marakuja");
        body.put("loginDate", LocalDate.now().toString());

        return new ResponseEntity<>(body, HttpStatus.OK);
    }
    
    @PostMapping(value = "/addclient", consumes = MediaType.APPLICATION_JSON_VALUE)
   	public ResponseEntity<Void> addclient(@RequestBody @Valid ClientForm obj) {
   		LOG.info("add a new client --------------------");
   		boolean registerInBase = clientService.addClient(obj);
   		return registerInBase ? new ResponseEntity<>(HttpStatus.CREATED) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
   	}

	@RequestMapping(value = "/listclient", method = RequestMethod.GET)
	public ResponseEntity<?> listclient() {
		List<Client> listOfCLient = clientService.getAllClients();
        return new ResponseEntity<>(listOfCLient, HttpStatus.OK);
    }
	
	@RequestMapping(value = "/getclient/{id}", method = RequestMethod.GET)
	public ResponseEntity<Client> getClientById(@PathVariable Long id) {
		LOG.info("list of clients --------------------");
		Client client = clientService.getClient(id);
		return new ResponseEntity<>(client, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/deleteclient/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteClientById(@PathVariable Long id) {
		LOG.info("remove a client --------------------");
		clientService.removeClient(id);
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
	
	@PatchMapping(value = "/updateclient", consumes = MediaType.APPLICATION_JSON_VALUE)
   	public ResponseEntity<Void> updateclient(@RequestBody @Valid ClientForm obj) {
   		LOG.info("update a client --------------------");
   		boolean registerInBase = clientService.addClient(obj);
   		return registerInBase ? new ResponseEntity<>(HttpStatus.CREATED) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
   	}
	
	
	@PostMapping(value = "/addcommande", consumes = MediaType.APPLICATION_JSON_VALUE)
   	public ResponseEntity<Void> addcommande(@RequestBody @Valid CommandeForm obj) {
   		LOG.info("add a new commande --------------------");
   		boolean registerInBase = commandeService.addCommande(obj);
   		return registerInBase ? new ResponseEntity<>(HttpStatus.CREATED) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
   	}
	
	@RequestMapping(value = "/listcommande", method = RequestMethod.GET)
	public ResponseEntity<?> listcommande() {
		List<Commande> listOfCommande = commandeService.getAllCommandes();
		
        return new ResponseEntity<>(listOfCommande, HttpStatus.OK);
    }
	
	@RequestMapping(value = "/getcommande/{id}", method = RequestMethod.GET)
	public ResponseEntity<Commande> getCommandeById(@PathVariable Long id) {
		LOG.info("list of commandes --------------------");
		Commande commande = commandeService.getCommande(id);
		return new ResponseEntity<>(commande, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/deletecommande/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteCommandeById(@PathVariable Long id) {
		LOG.info("remove a commande --------------------");
		commandeService.removeCommande(id);
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
	
	@PatchMapping(value = "/updatecommande", consumes = MediaType.APPLICATION_JSON_VALUE)
   	public ResponseEntity<Void> updatecommande(@RequestBody @Valid CommandeForm obj) {
   		LOG.info("update a commande --------------------");
   		boolean registerInBase = commandeService.addCommande(obj);
   		return registerInBase ? new ResponseEntity<>(HttpStatus.CREATED) : new ResponseEntity<>(HttpStatus.BAD_REQUEST);
   	}
	
}