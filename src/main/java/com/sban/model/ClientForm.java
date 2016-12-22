package com.sban.model;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import com.sban.validation.annotation.AddressAvailable;
import com.sban.validation.annotation.NameAvailable;

/**
 * That class was created by Mikolaj Matejko
 * on 23.09.2016 19:46 as part of spring-boot-angular2 project.
 */
public class ClientForm {
	
	private Long id;
    
	@NotEmpty(message = "isNull")
    @Length(min = 5, max = 15, message = "length")
	@NameAvailable
    private String name;

    @NotEmpty(message = "isNull")
    @AddressAvailable
    private String address;

    @NotEmpty(message = "isNull")
    private String type;

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

    
}
