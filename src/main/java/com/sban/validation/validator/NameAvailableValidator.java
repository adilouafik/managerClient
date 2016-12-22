package com.sban.validation.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.stereotype.Component;

import com.sban.service.ClientService;
import com.sban.validation.annotation.NameAvailable;

/**
 * That class was created by  Hicham Bousarehane
 * on 24.09.2016 19:58 as part of spring-boot-angular2 project.
 */
@Component
public class NameAvailableValidator implements ConstraintValidator<NameAvailable, String> {
    private final ClientService clientService;

    public NameAvailableValidator(ClientService clientService) {
        this.clientService = clientService;
    }

    @Override
    public void initialize(NameAvailable nameAvailable) {

    }

    @Override
    public boolean isValid(String name, ConstraintValidatorContext constraintValidatorContext) {
        return clientService.nameAvailable(name);
    }
}
