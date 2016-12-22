package com.sban.service;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.sban.db.entity.Commande;
import com.sban.model.CommandeForm;

/**
 * That class was created by Mikolaj Matejko
 * on 23.09.2016 20:22 as part of spring-boot-angular2 project.
 */
@Mapper(componentModel = "spring")
public interface CommandeMapper {
	
	@Mapping(source = "id", target = "id")
    @Mapping(source = "numero", target = "numero")
	 @Mapping(source = "dateTimeCommande", target = "dateTimeCommande")
    Commande commandeFormToCommande(CommandeForm form);
}
