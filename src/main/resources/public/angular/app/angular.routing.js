"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("../login/login.component");
var register_component_1 = require("../register/register.component");
var client_component_1 = require("../client/client.component");
var commande_component_1 = require("../commande/commande.component");
var contact_component_1 = require("../informations/contact.component");
var about_component_1 = require("../informations/about.component");
var home_component_1 = require("../informations/home.component");
var client_list_component_1 = require("../client/client-list.component");
var commande_list_component_1 = require("../commande/commande-list.component");
var client_edit_component_1 = require("../client/client-edit.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'addClient',
        component: client_component_1.ClientComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    { path: 'clients', component: client_list_component_1.ClientListComponent },
    { path: 'clients/:id/edit', component: client_edit_component_1.ClientEditComponent },
    {
        path: 'addCommande',
        component: commande_component_1.CommandeComponent
    },
    {
        path: 'commandes',
        component: commande_list_component_1.CommandeListComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=angular.routing.js.map