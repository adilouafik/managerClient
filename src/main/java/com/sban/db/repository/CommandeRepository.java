package com.sban.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sban.db.entity.Commande;

/**
 * That class was created by Bousarehane hicham
 * on 23.09.2016 20:14 as part of spring-boot-angular2 project.
 */
public interface CommandeRepository extends JpaRepository<Commande, Long> {

	Commande findByNumeroIgnoreCase(String name);
	
    @Query("SELECT DISTINCT c FROM Commande c LEFT JOIN FETCH c.client")
   	public List<Commande> getAllCommandes() ;
}
