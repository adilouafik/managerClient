package com.sban.exceptions;

/**
 * That class was created by Mikolaj Matejko
 * on 24.09.2016 19:38 as part of spring-boot-angular2 project.
 */
public enum ErrorCodes {
    ERROR_USERNAME_TAKEN("username_taken"), ERROR_EMAIL_TAKEN("email_taken");

    private final String code;

    ErrorCodes(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return this.code;
    }
}
