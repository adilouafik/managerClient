package com.sban.model;

import java.util.List;

/**
 * That class was created by Mikolaj Matejko
 * on 25.09.2016 11:11 as part of spring-boot-angular2 project.
 */
public class ErrorDTO {
    private String field;
    private String messageCode;
    private List<String> arguments;

    public ErrorDTO(String field, String messageCode, List<String> arguments) {
        this.field = field;
        this.messageCode = messageCode;
        this.arguments = arguments;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getMessageCode() {
        return messageCode;
    }

    public void setMessageCode(String messageCode) {
        this.messageCode = messageCode;
    }

    public List<String> getArguments() {
        return arguments;
    }

    public void setArguments(List<String> arguments) {
        this.arguments = arguments;
    }
}
