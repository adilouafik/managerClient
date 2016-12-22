"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar');
var client_service_1 = require("./client.service");
var items_service_1 = require('../app/services/items.service');
var notification_service_1 = require('../app/services/notification.service');
var ClientListComponent = (function () {
    function ClientListComponent(clientService, itemsService, notificationService, loadingBarService) {
        this.clientService = clientService;
        this.itemsService = itemsService;
        this.notificationService = notificationService;
        this.loadingBarService = loadingBarService;
        this.itemsPerPage = 2;
        this.totalItems = 0;
        this.currentPage = 1;
        this.items = ['item1', 'item2', 'item3'];
        this.selectedClientLoaded = false;
        this.index = 0;
        this.backdropOptions = [true, false, 'static'];
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    ClientListComponent.prototype.loadClients = function () {
        var _this = this;
        this.loadingBarService.start();
        this.clientService.getClients(this.currentPage, this.itemsPerPage)
            .subscribe(function (res) {
            _this.clients = res.result; // CLients;
            // this.totalItems = res.pagination.TotalItems;
            _this.loadingBarService.complete();
        }, function (error) {
            _this.loadingBarService.complete();
            _this.notificationService.printErrorMessage('Failed to load CLients. ' + error);
        });
    };
    ClientListComponent.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        this.loadClients();
    };
    ;
    ClientListComponent.prototype.removeClient = function (client) {
        var _this = this;
        this.notificationService.openConfirmationDialog('Are you sure you want to delete this Client?', function () {
            _this.loadingBarService.start();
            _this.clientService.deleteClient(client.id)
                .subscribe(function () {
                _this.itemsService.removeItemFromArray(_this.clients, client);
                _this.notificationService.printSuccessMessage(client.name + ' has been deleted.');
                //this.loadingBarService.complete();
            }, function (error) {
                _this.loadingBarService.complete();
                _this.notificationService.printErrorMessage('Failed to delete ' + client.name + ' ' + error);
            });
        });
    };
    ClientListComponent.prototype.viewClientDetails = function (id) {
        var _this = this;
        this.selectedClientId = id;
        this.clientService.viewClientDetails(this.selectedClientId)
            .subscribe(function (client) {
            _this.clientDetails = _this.itemsService.getSerialized(client);
            // Convert date times to readable format
            _this.loadingBarService.complete();
            _this.selectedClientLoaded = true;
            _this.childModal.show(); //.open('lg');
        }, function (error) {
            _this.loadingBarService.complete();
            _this.notificationService.printErrorMessage('Failed to load client. ' + error);
        });
    };
    ClientListComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ClientListComponent.prototype, "childModal", void 0);
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', Object)
    ], ClientListComponent.prototype, "modal", void 0);
    ClientListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-clients',
            templateUrl: 'client-list.component.html',
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        core_1.animate('0.5s ease-in')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.2s 10 ease-out', core_1.style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, items_service_1.ItemsService, notification_service_1.NotificationService, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map