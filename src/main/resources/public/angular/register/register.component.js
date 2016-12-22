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
var validators_1 = require("../app/models/validators");
var register_service_1 = require("./register.service");
var router_1 = require("@angular/router");
var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(registerService, router, formBuilder) {
        _super.call(this, formBuilder);
        this.registerService = registerService;
        this.router = router;
    }
    RegisterComponent.prototype.cleanForm = function () {
        this.res = null;
        this.errors = null;
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            "login": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(15)])],
            "email": ["", forms_1.Validators.compose([forms_1.Validators.required, validators_1.CustomValidators.emailAddress])],
            "password": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(15),
                    validators_1.CustomValidators.password])],
            "passwordRepeated": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(15),
                    validators_1.CustomValidators.password])],
        }, { validator: validators_1.CustomValidators.matchingPasswords('password', 'passwordRepeated') });
    };
    RegisterComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.cleanForm();
        this.registerService
            .register(this.form)
            .subscribe(function (data) { return _this.router.navigateByUrl("login"); }, function (error) { return _this.errors = error; });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-page',
            templateUrl: 'register.component.html',
            providers: [register_service_1.RegisterService]
        }), 
        __metadata('design:paramtypes', [register_service_1.RegisterService, router_1.Router, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}(form_component_1.FormComponent));
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map