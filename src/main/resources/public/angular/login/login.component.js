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
var form_component_1 = require("../app/components/form.component");
var forms_1 = require("@angular/forms");
var login_service_1 = require("./login.service");
var user_service_1 = require("../app/services/user.service");
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(loginService, userService, formBuilder) {
        _super.call(this, formBuilder);
        this.loginService = loginService;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            "login": ["", forms_1.Validators.required],
            "password": ["", forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.loginService
            .login(this.form)
            .subscribe(function (data) { return _this.userService.user = data.json(); }, function (error) { return _this.errors = error; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-page',
            templateUrl: 'login.component.html',
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, user_service_1.UserService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}(form_component_1.FormComponent));
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map