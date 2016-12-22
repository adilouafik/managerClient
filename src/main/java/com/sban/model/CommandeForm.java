package com.sban.model;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * That class was created by Mikolaj Matejko
 * on 23.09.2016 19:46 as part of spring-boot-angular2 project.
 */
public class CommandeForm {
	
	private Long id;
    
	@NotEmpty(message = "isNull")
    @Length(min = 5, max = 15, message = "length")
    private String numero;

    @NotEmpty(message = "isNull")
    @Temporal(TemporalType.DATE)
    private String dateTimeCommande;

    private ClientForm clientForm;
    
    @NotEmpty(message = "isNull")
    private String clientMap;
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
	public String getDateTimeCommande() {
		return dateTimeCommande;
	}

	/**
	 * Used to enter the value of the attribute {@link #dateTimeCommande}.
	 * @param pDateTimeCommande The value of the attribute dateTimeCommande to inform.
	 */
	public void setDateTimeCommande(String pDateTimeCommande) {
		dateTimeCommande = pDateTimeCommande;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #clientForm}.
	 * @return The attribute clientForm.
	 */
	public ClientForm getClientForm() {
		if (clientMap != null && !clientMap.isEmpty()) {
			if (null == clientForm)
				clientForm = new ClientForm();
			clientForm.setId(Long.valueOf(clientMap));
		}

		return clientForm;
	}

	/**
	 * Used to enter the value of the attribute {@link #clientForm}.
	 * @param pClientForm The value of the attribute clientForm to inform.
	 */
	public void setClientForm(ClientForm pClientForm) {
		clientForm = pClientForm;
	}

	/**
	 * Used to retrieve the value of the attribute {@link #clientMap}.
	 * @return The attribute clientMap.
	 */
	public String getClientMap() {
		return clientMap;
	}

	/**
	 * Used to enter the value of the attribute {@link #clientMap}.
	 * @param pClientMap The value of the attribute clientMap to inform.
	 */
	public void setClientMap(String pClientMap) {
		clientMap = pClientMap;
	}
}
