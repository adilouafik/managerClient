package com.sban.exceptions;

/**
 * That class was created by Mikolaj Matejko
 * on 24.09.2016 19:27 as part of spring-boot-angular2 project.
 */
public class RestException extends Exception {
    /**
     * @param errorCode the code of the error, which is going to be handled in the frontend of application
     */
    public RestException(ErrorCodes errorCode) {
        super(errorCode.toString());
    }
}
