package com.sban.validation.annotation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.sban.validation.validator.AddressAvailableValidator;

/**
 * That class was created by Hicham Bousarehane
 * on 24.09.2016 19:53 as part of spring-boot-angular2 project.
 */
@Documented
@Constraint(
        validatedBy = {AddressAvailableValidator.class}
)
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface AddressAvailable {
    String message() default "addressTaken";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
