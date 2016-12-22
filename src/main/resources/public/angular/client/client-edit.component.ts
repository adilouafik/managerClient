import { Component, OnInit, ViewChild, Input, Output,
    trigger,
    state,
    style,
    animate,
    transition } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormComponent} from "../app/components/form.component";
import {CustomValidators} from "../app/models/validators";
import {ClientService} from "./client.service";
import {ErrorData} from "../app/models/errorData";
import {Router, ActivatedRoute} from "@angular/router";
import {FieldInfo} from '../app/components/fieldInfo';
import { ItemsService } from '../app/services/items.service';
import { NotificationService } from '../app/services/notification.service';
import { Client, Pagination, PaginatedResult } from '../app/models/client';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    moduleId: module.id,
    selector: 'client-edit',
    templateUrl: 'client-edit.component.html',
    providers: [ClientService]
})
export class ClientEditComponent extends FormComponent {

    res;
    errors:ErrorData[];
    fields = ALL_FIELDS;
    id: number;
    client: Client;
    clientLoaded: boolean = false;
    types: string[];
    private sub: any;
    name: string;
    test: string="test";
    address: string;
    type: string;

    cleanForm() {
        this.res = null;
        this.errors = null;
    }

    constructor(private clientService:ClientService, private router:Router, private route: ActivatedRoute ,formBuilder:FormBuilder ,  private itemsService: ItemsService,
        private notificationService: NotificationService,
        private loadingBarService:SlimLoadingBarService) {
        super(formBuilder);
    }

    ngOnInit():void {
        this.form = this.formBuilder.group({
            "name": ["", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
            "address": ["", Validators.compose([Validators.required])],
            "type": ["", Validators.compose([Validators.required])],
            "id": ["", Validators.compose([Validators.required])],
        });
        
        this.id = +this.route.snapshot.params['id'];
        this.viewClientDetails();
    }
    
    
    viewClientDetails() {
        this.loadingBarService.start();

        this.clientService.viewClientDetails(this.id)
            .subscribe((client: Client) => {
                this.client = this.itemsService.getSerialized<Client>(client);
                this.clientLoaded = true;
                
               
                this.name = this.client.name;
                this.address = this.client.address;
                this.type = this.client.type;
                // Convert date times to readable format
                this.loadingBarService.complete();
    
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load client. ' + error);
            });
    }
    onItemChanged(selectedItemId: string){
        console.log("onItemSelected(" + selectedItemId + ")");
     }

    onSubmitForm() {
        this.cleanForm();

        this.clientService
            .update(this.form)
            .subscribe(
                data => this.router.navigateByUrl("clients"),
                error => this.errors = error);
    }
    
    back() {
        this.router.navigateByUrl("clients");
    }
}

    var ALL_FIELDS: FieldInfo[] = [
        {
            "options" : [ "M", "F"],
            "value": "M"
        }
  ];
