package com.sban.validation.annotation;

import com.sban.validation.validator.EmailAvailableValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * That class was created by Mikolaj Matejko
 * on 24.09.2016 19:54 as part of spring-boot-angular2 project.
 */
@Documented
@Constraint(
        validatedBy = {EmailAvailableValidator.class}
)
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface EmailAvailable {
    String message() default "emailTaken";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
