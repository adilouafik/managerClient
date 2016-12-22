package com.sban.validation.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.stereotype.Component;

import com.sban.service.ClientService;
import com.sban.validation.annotation.AddressAvailable;

/**
 * That class was created by  Hicham Bousarehane
 * on 24.09.2016 19:58 as part of spring-boot-angular2 project.
 */
@Component
public class AddressAvailableValidator implements ConstraintValidator<AddressAvailable, String> {
    private final ClientService clientService;

    public AddressAvailableValidator(ClientService clientService) {
        this.clientService = clientService;
    }

    @Override
    public void initialize(AddressAvailable addressAvailable) {

    }

    @Override
    public boolean isValid(String address, ConstraintValidatorContext constraintValidatorContext) {
        return clientService.addressAvailable(address);
    }
}
