package com.sban.model;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * That class was created by Mikolaj Matejko
 * on 26.09.2016 19:07 as part of spring-boot-angular2 project.
 */
public class LoginForm {
    @NotEmpty
    private String login;

    @NotEmpty
    private String password;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
