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
var platform_browser_1 = require('@angular/platform-browser');
var angular_component_1 = require("./angular.component");
var login_component_1 = require("../login/login.component");
var angular_routing_1 = require("./angular.routing");
var register_component_1 = require("../register/register.component");
var client_component_1 = require("../client/client.component");
var client_list_component_1 = require("../client/client-list.component");
var client_edit_component_1 = require("../client/client-edit.component");
var commande_component_1 = require("../commande/commande.component");
var commande_list_component_1 = require("../commande/commande-list.component");
var about_component_1 = require("../informations/about.component");
var contact_component_1 = require("../informations/contact.component");
var home_component_1 = require("../informations/home.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var header_component_1 = require("./components/header.component");
var inputgroup_component_1 = require("./components/inputgroup.component");
var listgroup_component_1 = require("./components/listgroup.component");
var arrayify_pipe_1 = require("./pipes/arrayify.pipe");
var user_service_1 = require("./services/user.service");
var items_service_1 = require('./services/items.service');
var client_service_1 = require('../client/client.service');
var notification_service_1 = require('./services/notification.service');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_3 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_4 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_5 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_slim_loading_bar_1 = require('ng2-slim-loading-bar');
var ng2_bootstrap_6 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_pagination_1 = require('ng2-pagination');
var common_1 = require('@angular/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, ng2_bootstrap_1.PaginationModule, ng2_pagination_1.Ng2PaginationModule, ng2_bootstrap_2.DatepickerModule, ng2_bootstrap_3.Ng2BootstrapModule, ng2_bootstrap_4.ModalModule, ng2_bootstrap_5.ProgressbarModule, ng2_bootstrap_6.TimepickerModule,
                ng2_translate_1.TranslateModule.forRoot(), angular_routing_1.routing],
            declarations: [angular_component_1.AppComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, client_component_1.ClientComponent, client_list_component_1.ClientListComponent, client_edit_component_1.ClientEditComponent, commande_component_1.CommandeComponent, commande_list_component_1.CommandeListComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, home_component_1.HomeComponent, ng2_slim_loading_bar_1.SlimLoadingBarComponent,
                header_component_1.PageHeaderComponent, inputgroup_component_1.InputGroupComponent, listgroup_component_1.ListGroupComponent, arrayify_pipe_1.ArrayifyPipe, arrayify_pipe_1.Json2ArrayPipe],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, user_service_1.UserService, ng2_slim_loading_bar_1.SlimLoadingBarService, items_service_1.ItemsService, notification_service_1.NotificationService, client_service_1.ClientService],
            bootstrap: [angular_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=angular.module.js.map