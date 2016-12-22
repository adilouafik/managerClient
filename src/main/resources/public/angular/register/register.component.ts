import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormComponent} from "../app/components/form.component";
import {CustomValidators} from "../app/models/validators";
import {RegisterService} from "./register.service";
import {ErrorData} from "../app/models/errorData";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'register-page',
    templateUrl: 'register.component.html',
    providers: [RegisterService]
})
export class RegisterComponent extends FormComponent {

    res;
    errors:ErrorData[];

    cleanForm() {
        this.res = null;
        this.errors = null;
    }

    constructor(private registerService:RegisterService, private router:Router, formBuilder:FormBuilder) {
        super(formBuilder);
    }

    ngOnInit():void {
        this.form = this.formBuilder.group({
            "login": ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
            "email": ["", Validators.compose([Validators.required, CustomValidators.emailAddress])],
            "password": ["", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15),
                CustomValidators.password])],
            "passwordRepeated": ["", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15),
                CustomValidators.password])],
        }, {validator: CustomValidators.matchingPasswords('password', 'passwordRepeated')});
    }

    onSubmitForm() {
        this.cleanForm();

        this.registerService
            .register(this.form)
            .subscribe(
                data => this.router.navigateByUrl("login"),
                error => this.errors = error);
    }
}