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
var ClientComponent = (function (_super) {
    __extends(ClientComponent, _super);
    function ClientComponent(clientService, router, formBuilder) {
        _super.call(this, formBuilder);
        this.clientService = clientService;
        this.router = router;
        this.fields = ALL_FIELDS;
    }
    ClientComponent.prototype.cleanForm = function () {
        this.res = null;
        this.errors = null;
    };
    ClientComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            "name": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)])],
            "address": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "type": ["", forms_1.Validators.compose([forms_1.Validators.required])],
        });
    };
    ClientComponent.prototype.onItemChanged = function (selectedItemId) {
        console.log("onItemSelected(" + selectedItemId + ")");
    };
    ClientComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.cleanForm();
        this.clientService
            .register(this.form)
            .subscribe(function (data) { return _this.router.navigateByUrl("clients"); }, function (error) { return _this.errors = error; });
    };
    ClientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-page',
            templateUrl: 'client.component.html',
            providers: [client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, router_1.Router, forms_1.FormBuilder])
    ], ClientComponent);
    return ClientComponent;
}(form_component_1.FormComponent));
exports.ClientComponent = ClientComponent;
var ALL_FIELDS = [
    {
        "options": ["M", "F"],
        "value": "M"
    }
];
//# sourceMappingURL=client.component.js.map