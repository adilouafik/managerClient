import { Component, OnInit, ViewChild, Input, Output,
    trigger,
    state,
    style,
    animate,
    transition } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import {CommandeService} from "./commande.service";
import {ClientService} from "../client/client.service";
import {ErrorData} from "../app/models/errorData";

import { ItemsService } from '../app/services/items.service';
import { NotificationService } from '../app/services/notification.service';
import { Client, Commande, Pagination, PaginatedResult } from '../app/models/client';

@Component({
    moduleId: module.id,
    selector: 'app-commandes',
    providers: [CommandeService],
    templateUrl: 'commande-list.component.html',
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
export class CommandeListComponent implements OnInit {
    @ViewChild('childModal') public childModal: ModalDirective;
    commandess: Commande[];
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
    selectedCommandeId: number;
    commandeDetails: Commande;
    selectedCommandeLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    constructor(
        private clientService: ClientService,
        private commandeService: CommandeService,
        private itemsService: ItemsService,
        private notificationService: NotificationService,
        private loadingBarService:SlimLoadingBarService) { }

    ngOnInit() {
        this.loadCommandes();
    }

    loadCommandes() {
        this.loadingBarService.start();

        this.commandeService.getCommandes(this.currentPage, this.itemsPerPage)
            .subscribe((res: PaginatedResult<Commande[]>) => {
                this.commandess = res.result;;
                this.loadingBarService.complete();
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load Commandes. ' + error);
            });
    }

    pageChanged(event: any): void {
        this.currentPage = event.page;
        this.loadCommandes();
    };

    removeCommande(commande: Commande) {
        this.notificationService.openConfirmationDialog('Are you sure you want to delete this Commande?',
            () => {
                this.loadingBarService.start();
                this.commandeService.deleteCommande(commande.id)
                    .subscribe(() => {
                        this.itemsService.removeItemFromArray<Commande>(this.commandess, commande);
                        this.notificationService.printSuccessMessage(commande.numero + ' has been deleted.');
                        this.loadingBarService.complete();
                    },
                    error => {
                        this.loadingBarService.complete();
                        this.notificationService.printErrorMessage('Failed to delete ' + commande.numero + ' ' + error);
                      
                    });
            });
    }

    viewCommandeDetails(id: number) {
        this.selectedCommandeId = id;

        this.commandeService.viewCommandeDetails(this.selectedCommandeId)
            .subscribe((commande: Commande) => {
                this.commandeDetails = this.itemsService.getSerialized<Commande>(commande);
                // Convert date times to readable format
                this.loadingBarService.complete();
                this.selectedCommandeLoaded = true;
                this.childModal.show();//.open('lg');
            },
            error => {
                this.loadingBarService.complete();
                this.notificationService.printErrorMessage('Failed to load commande. ' + error);
            });
    }

    public hideChildModal(): void {
        this.childModal.hide();
    }
}