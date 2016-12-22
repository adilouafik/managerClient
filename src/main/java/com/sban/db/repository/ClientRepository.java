package com.sban.db.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sban.db.entity.Client;

/**
 * That class was created by Bousarehane hicham
 * on 23.09.2016 20:14 as part of spring-boot-angular2 project.
 */
public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findByNameIgnoreCase(String name);
    
    Client findByAddressIgnoreCase(String address);
    
    @Query("SELECT DISTINCT c FROM Client c LEFT JOIN FETCH c.commandes WHERE c.id = (:id)")
    public Client findByIdAndFetchCommandes(@Param("id") Long id);
    
    @Query("SELECT DISTINCT c FROM Client c LEFT JOIN FETCH c.commandes")
   	public List<Client> getAllClients() ;


}
