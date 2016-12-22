import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {ClientComponent} from "../client/client.component";
import {CommandeComponent} from "../commande/commande.component";
import {ContactComponent} from "../informations/contact.component";
import {AboutComponent} from "../informations/about.component";
import {HomeComponent} from "../informations/home.component";
import {ClientListComponent} from "../client/client-list.component";
import {CommandeListComponent} from "../commande/commande-list.component";
import {ClientEditComponent} from "../client/client-edit.component";


const appRoutes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'addClient',
        component: ClientComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { path: 'clients', component: ClientListComponent },
    { path: 'clients/:id/edit', component: ClientEditComponent },
    {
        path: 'addCommande',
        component: CommandeComponent
    },
    {
        path: 'commandes',
        component: CommandeListComponent
    },
   
    
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes , { useHash: true });