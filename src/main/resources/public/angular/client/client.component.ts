import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormComponent} from "../app/components/form.component";
import {CustomValidators} from "../app/models/validators";
import {ClientService} from "./client.service";
import {ErrorData} from "../app/models/errorData";
import {Router} from "@angular/router";
import {FieldInfo} from '../app/components/fieldInfo';

@Component({
    moduleId: module.id,
    selector: 'client-page',
    templateUrl: 'client.component.html',
    providers: [ClientService]
})
export class ClientComponent extends FormComponent {

    res;
    errors:ErrorData[];
    fields = ALL_FIELDS;

    cleanForm() {
        this.res = null;
        this.errors = null;
    }

    constructor(private clientService:ClientService, private router:Router, formBuilder:FormBuilder) {
        super(formBuilder);
    }

    ngOnInit():void {
        this.form = this.formBuilder.group({
            "name": ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
            "address": ["", Validators.compose([Validators.required])],
            "type": ["", Validators.compose([Validators.required])],
        });
    }
    
    onItemChanged(selectedItemId: string){
        console.log("onItemSelected(" + selectedItemId + ")");
     }

    onSubmitForm() {
        this.cleanForm();

        this.clientService
            .register(this.form)
            .subscribe(
                data => this.router.navigateByUrl("clients"),
                error => this.errors = error);
    }
}

    var ALL_FIELDS: FieldInfo[] = [
        {
            "options" : [ "M", "F"],
            "value": "M"
        }
  ];
