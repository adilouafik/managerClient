package com.sban.service;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.sban.db.entity.Client;
import com.sban.model.ClientForm;

/**
 * That class was created by Mikolaj Matejko
 * on 23.09.2016 20:22 as part of spring-boot-angular2 project.
 */
@Mapper(componentModel = "spring")
public interface ClientMapper {
	
	@Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "address", target = "address")
    @Mapping(source = "type", target = "type")
    Client clientFormToClient(ClientForm form);
}
