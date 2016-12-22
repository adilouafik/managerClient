import { Component, OnInit, ViewChild, Input, Output,
    trigger,
    state,
    style,
    animate,
    transition } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import {ClientService} from "./client.service";
import {ErrorData} from "../app/models/errorData";

import { ItemsService } from '../app/services/items.service';
import { NotificationService } from '../app/services/notification.service';
import { Client, Pagination, PaginatedResult } from '../app/models/client';

@Component({
    moduleId: module.id,
    selector: 'app-clients',
    templateUrl: 'client-list.component.html',
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.5s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class ClientListComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;
    clients: Client[];
    errors:ErrorData[];

    public itemsPerPage: number = 2;
    public totalItems: number = 0;
    public currentPage: number = 1;

    // Modal properties
    @ViewChild('modal')
    modal: any;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    selectedClientId: number;
    clientDetails: Client;
    selectedClientLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    constructor(
        private clientService: ClientService,
        private itemsService: ItemsService,
        private notificationService: NotificationService,
        private loadingBarService:SlimLoadingBarService) { }

    ngOnInit() {
        this.loadClients();
    }

    loadClients() {
        this.loadingBarService.start();

        this.clientService.getClients(this.currentPage, this.itemsPerPage)
            .subscribe((res: PaginatedResult<Client[]>) => {
                this.clients = res.result;// CLients;
               // this.totalItems = res.pagination.TotalItems;
                this.loadingBarService.complete();
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load CLients. ' + error);
            });
    }

    pageChanged(event: any): void {
        this.currentPage = event.page;
        this.loadClients();
    };

    removeClient(client: Client) {
        this.notificationService.openConfirmationDialog('Are you sure you want to delete this Client?',
            () => {
                this.loadingBarService.start();
                this.clientService.deleteClient(client.id)
                    .subscribe(() => {
                        this.itemsService.removeItemFromArray<Client>(this.clients, client);
                        this.notificationService.printSuccessMessage(client.name + ' has been deleted.');
                        //this.loadingBarService.complete();
                    },
                    error => {
                        this.loadingBarService.complete();
                        this.notificationService.printErrorMessage('Failed to delete ' + client.name + ' ' + error);
                      
                    });
            });
    }

    viewClientDetails(id: number) {
        this.selectedClientId = id;

        this.clientService.viewClientDetails(this.selectedClientId)
            .subscribe((client: Client) => {
                this.clientDetails = this.itemsService.getSerialized<Client>(client);
                // Convert date times to readable format
                this.loadingBarService.complete();
                this.selectedClientLoaded = true;
                this.childModal.show();//.open('lg');
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load client. ' + error);
            });
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }
}