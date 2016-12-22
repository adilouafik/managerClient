"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var forms_1 = require("@angular/forms");
var form_component_1 = require("../app/components/form.component");
var client_service_1 = require("./client.service");
var router_1 = require("@angular/router");
var items_service_1 = require('../app/services/items.service');
var notification_service_1 = require('../app/services/notification.service');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar');
var ClientEditComponent = (function (_super) {
    __extends(ClientEditComponent, _super);
    function ClientEditComponent(clientService, router, route, formBuilder, itemsService, notificationService, loadingBarService) {
        _super.call(this, formBuilder);
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.itemsService = itemsService;
        this.notificationService = notificationService;
        this.loadingBarService = loadingBarService;
        this.fields = ALL_FIELDS;
        this.clientLoaded = false;
        this.test = "test";
    }
    ClientEditComponent.prototype.cleanForm = function () {
        this.res = null;
        this.errors = null;
    };
    ClientEditComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            "name": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)])],
            "address": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "type": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "id": ["", forms_1.Validators.compose([forms_1.Validators.required])],
        });
        this.id = +this.route.snapshot.params['id'];
        this.viewClientDetails();
    };
    ClientEditComponent.prototype.viewClientDetails = function () {
        var _this = this;
        this.loadingBarService.start();
        this.clientService.viewClientDetails(this.id)
            .subscribe(function (client) {
            _this.client = _this.itemsService.getSerialized(client);
            _this.clientLoaded = true;
            _this.name = _this.client.name;
            _this.address = _this.client.address;
            _this.type = _this.client.type;
            // Convert date times to readable format
            _this.loadingBarService.complete();
        }, function (error) {
            _this.loadingBarService.complete();
            _this.notificationService.printErrorMessage('Failed to load client. ' + error);
        });
    };
    ClientEditComponent.prototype.onItemChanged = function (selectedItemId) {
        console.log("onItemSelected(" + selectedItemId + ")");
    };
    ClientEditComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.cleanForm();
        this.clientService
            .update(this.form)
            .subscribe(function (data) { return _this.router.navigateByUrl("clients"); }, function (error) { return _this.errors = error; });
    };
    ClientEditComponent.prototype.back = function () {
        this.router.navigateByUrl("clients");
    };
    ClientEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-edit',
            templateUrl: 'client-edit.component.html',
            providers: [client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, items_service_1.ItemsService, notification_service_1.NotificationService, ng2_slim_loading_bar_1.SlimLoadingBarService])
    ], ClientEditComponent);
    return ClientEditComponent;
}(form_component_1.FormComponent));
exports.ClientEditComponent = ClientEditComponent;
var ALL_FIELDS = [
    {
        "options": ["M", "F"],
        "value": "M"
    }
];
//# sourceMappingURL=client-edit.component.js.map