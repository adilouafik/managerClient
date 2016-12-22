/**
 * Project: Atos Worldline ICT
 * Sub-project: [Sub project]
 * Application: [Application]
 * Producer: AWL
 * Version Date : 6 déc. 2016
 * Version number : 1.0
 * Author : Hicham Bousarehane
 * Contact : hicham.bousarehane@atos.net
 * Notes : <Release Notes (classified by deviation from previous versions)>
 */
package com.sban.db.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.joda.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * @author Hicham BOUSAREHANE
 * @version 1.0
 *
 */
@Entity
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Commande {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "commande_id", nullable = false, unique = true)
	private Long id;

	@Column(nullable = false, unique = true)
	private String numero;

	@Column(name = "date_time", nullable = false)
	protected LocalDate dateTimeCommande;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "client_id")
	//@JsonBackReference
	@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "name")
	private Client client;

	/**
	 * Used to retrieve the value of the attribute {@link #id}.
	 * @return The attribute id.
	 */
	public Long getId() {
		return id;
	}

	/**
	 * Used to enter the value of the attribute {@link #id}.
	 * @param pId The value of the attribute id to inform.
	 */
	public void setId(Long pId) {
		id = pId;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #numero}.
	 * @return The attribute numero.
	 */
	public String getNumero() {
		return numero;
	}

	/**
	 * Used to enter the value of the attribute {@link #numero}.
	 * @param pNumero The value of the attribute numero to inform.
	 */
	public void setNumero(String pNumero) {
		numero = pNumero;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #dateTimeCommande}.
	 * @return The attribute dateTimeCommande.
	 */
	public LocalDate getDateTimeCommande() {
		return dateTimeCommande;
	}

	/**
	 * Used to enter the value of the attribute {@link #dateTimeCommande}.
	 * @param pDateTimeCommande The value of the attribute dateTimeCommande to inform.
	 */
	public void setDateTimeCommande(LocalDate pDateTimeCommande) {
		dateTimeCommande = pDateTimeCommande;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #client}.
	 * @return The attribute client.
	 */
	public Client getClient() {
		return client;
	}

	/**
	 * Used to enter the value of the attribute {@link #client}.
	 * @param pClient The value of the attribute client to inform.
	 */
	public void setClient(Client pClient) {
		client = pClient;
	}
}

