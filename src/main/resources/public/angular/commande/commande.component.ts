import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormComponent} from "../app/components/form.component";
import {CustomValidators} from "../app/models/validators";
import {CommandeService} from "./commande.service";
import {ClientService} from "../client/client.service";
import {ErrorData} from "../app/models/errorData";
import {Router} from "@angular/router";
import {FieldInfo} from '../app/components/fieldInfo';
import { Client, Commande ,Pagination, PaginatedResult } from '../app/models/client';

@Component({
    moduleId: module.id,
    selector: 'commande-page',
    templateUrl: 'commande.component.html',
    providers: [CommandeService]
})
export class CommandeComponent extends FormComponent {

    res;
    errors:ErrorData[];
    clients: Client[];

    cleanForm() {
        this.res = null;
        this.errors = null;
    }

    constructor(private commandeService:CommandeService, private clientService:ClientService, private router:Router, formBuilder:FormBuilder) {
        super(formBuilder);
    }

    ngOnInit():void {
        this.form = this.formBuilder.group({
            "numero": ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
            "dateTimeCommande": ["", Validators.compose([Validators.required])],
            "clientMap": ["", Validators.compose([Validators.required])],
        });
        
        this.clientService.getClients(null, null)
            .subscribe((res: PaginatedResult<Client[]>) => {
                this.clients = res.result;// CLients;
            },
            error => {
            });
    }
    
    onItemChanged(selectedItemId: string){
        console.log("onItemSelected(" + selectedItemId + ")");
     }

    onSubmitForm() {
        this.cleanForm();

        this.commandeService
            .register(this.form)
            .subscribe(
                data => this.router.navigateByUrl("commandes"),
                error => this.errors = error);
    }
}
