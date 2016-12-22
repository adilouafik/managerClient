package com.sban.model;

import com.sban.validation.annotation.EmailAvailable;
import com.sban.validation.annotation.UsernameAvailable;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * That class was created by Mikolaj Matejko
 * on 23.09.2016 19:46 as part of spring-boot-angular2 project.
 */
public class RegisterForm {
    @NotEmpty(message = "isNull")
    @Length(min = 5, max = 15, message = "length")
    @UsernameAvailable
    private String login;

    @NotEmpty(message = "isNull")
    @Email(message = "email")
    @EmailAvailable
    private String email;

    @NotEmpty(message = "isNull")
    @Length(min = 6, max = 15, message = "length")
    private String password;

    @NotEmpty(message = "isNull")
    @Length(min = 6, max = 15, message = "length")
    private String passwordRepeated;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordRepeated() {
        return passwordRepeated;
    }

    public void setPasswordRepeated(String passwordRepeated) {
        this.passwordRepeated = passwordRepeated;
    }
}
