package com.sban.validation.validator;

import com.sban.service.UserService;
import com.sban.validation.annotation.EmailAvailable;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * That class was created by Mikolaj Matejko
 * on 24.09.2016 19:58 as part of spring-boot-angular2 project.
 */
@Component
public class EmailAvailableValidator implements ConstraintValidator<EmailAvailable, String> {
    private final UserService userService;

    public EmailAvailableValidator(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void initialize(EmailAvailable emailAvailable) {

    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext constraintValidatorContext) {
        return userService.emailAvailable(email);
    }
}
