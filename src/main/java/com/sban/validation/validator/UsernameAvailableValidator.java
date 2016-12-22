package com.sban.validation.validator;

import com.sban.service.UserService;
import com.sban.validation.annotation.UsernameAvailable;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * That class was created by Mikolaj Matejko
 * on 24.09.2016 19:58 as part of spring-boot-angular2 project.
 */
@Component
public class UsernameAvailableValidator implements ConstraintValidator<UsernameAvailable, String> {
    private final UserService userService;

    public UsernameAvailableValidator(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void initialize(UsernameAvailable usernameAvailable) {

    }

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        return userService.usernameAvailable(username);
    }
}
