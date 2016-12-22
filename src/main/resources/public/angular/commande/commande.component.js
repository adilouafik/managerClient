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
var commande_service_1 = require("./commande.service");
var client_service_1 = require("../client/client.service");
var router_1 = require("@angular/router");
var CommandeComponent = (function (_super) {
    __extends(CommandeComponent, _super);
    function CommandeComponent(commandeService, clientService, router, formBuilder) {
        _super.call(this, formBuilder);
        this.commandeService = commandeService;
        this.clientService = clientService;
        this.router = router;
    }
    CommandeComponent.prototype.cleanForm = function () {
        this.res = null;
        this.errors = null;
    };
    CommandeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            "numero": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)])],
            "dateTimeCommande": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "clientMap": ["", forms_1.Validators.compose([forms_1.Validators.required])],
        });
        this.clientService.getClients(null, null)
            .subscribe(function (res) {
            _this.clients = res.result; // CLients;
        }, function (error) {
        });
    };
    CommandeComponent.prototype.onItemChanged = function (selectedItemId) {
        console.log("onItemSelected(" + selectedItemId + ")");
    };
    CommandeComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.cleanForm();
        this.commandeService
            .register(this.form)
            .subscribe(function (data) { return _this.router.navigateByUrl("commandes"); }, function (error) { return _this.errors = error; });
    };
    CommandeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'commande-page',
            templateUrl: 'commande.component.html',
            providers: [commande_service_1.CommandeService]
        }), 
        __metadata('design:paramtypes', [commande_service_1.CommandeService, client_service_1.ClientService, router_1.Router, forms_1.FormBuilder])
    ], CommandeComponent);
    return CommandeComponent;
}(form_component_1.FormComponent));
exports.CommandeComponent = CommandeComponent;
//# sourceMappingURL=commande.component.js.map