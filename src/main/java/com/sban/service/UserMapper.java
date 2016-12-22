package com.sban.service;

import com.sban.db.entity.User;
import com.sban.model.RegisterForm;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * That class was created by Mikolaj Matejko
 * on 23.09.2016 20:22 as part of spring-boot-angular2 project.
 */
@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "login", target = "username")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    User registerFormToUser(RegisterForm form);
}
