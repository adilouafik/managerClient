import {Component, OnInit} from '@angular/core';
import {FormComponent} from "../app/components/form.component";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {UserService} from "../app/services/user.service";
import {User} from "../app/models/user";

@Component({
    moduleId: module.id,
    selector: 'login-page',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})
export class LoginComponent extends FormComponent {
    private data;
    private errors;

    constructor(private loginService:LoginService, private userService:UserService, formBuilder:FormBuilder) {
        super(formBuilder);
    }

    ngOnInit():void {
        this.form = this.formBuilder.group({
            "login": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }

    onSubmitForm() {
        this.loginService
            .login(this.form)
            .subscribe(
                data => this.userService.user = <User>data.json(),
                error => this.errors = error);
    }

}