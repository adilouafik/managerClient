package com.sban.db.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


/**
 * That class was created by Bousarehane Hicham
 * on 23.11.2016 23:05 as part of spring-boot-angular2 project.
 */
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "client_id", nullable = false, unique = true)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, unique = true)
    private String address;

    @Column(nullable = false)
    private String type;
    
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    //@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
    @JsonManagedReference
    private List<Commande> commandes = new ArrayList<Commande>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

	/**
	 * Used to retrieve the value of the attribute {@link #name}.
	 * @return The attribute name.
	 */
	public String getName() {
		return name;
	}

	/**
	 * Used to enter the value of the attribute {@link #name}.
	 * @param pName The value of the attribute name to inform.
	 */
	public void setName(String pName) {
		name = pName;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #address}.
	 * @return The attribute address.
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * Used to enter the value of the attribute {@link #address}.
	 * @param pAddress The value of the attribute address to inform.
	 */
	public void setAddress(String pAddress) {
		address = pAddress;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #type}.
	 * @return The attribute type.
	 */
	public String getType() {
		return type;
	}

	/**
	 * Used to enter the value of the attribute {@link #type}.
	 * @param pType The value of the attribute type to inform.
	 */
	public void setType(String pType) {
		type = pType;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #commandes}.
	 * @return The attribute commandes.
	 */
	public List<Commande> getCommandes() {
		return commandes;
	}

	/**
	 * Used to enter the value of the attribute {@link #commandes}.
	 * @param pCommandes The value of the attribute commandes to inform.
	 */
	public void setCommandes(List<Commande> pCommandes) {
		commandes = pCommandes;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #commandes}.
	 * @return The attribute commandes.
	 */
	//@JsonIgnore
	//@JsonManagedReference("hicham")
//	public Set<Commande> getCommandes() {
//		return commandes;
//	}
//
//	/**
//	 * Used to enter the value of the attribute {@link #commandes}.
//	 * @param pCommandes The value of the attribute commandes to inform.
//	 */
//	public void setCommandes(Set<Commande> pCommandes) {
//		commandes = pCommandes;
//	}

}
