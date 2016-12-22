import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./angular.component";
import {LoginComponent} from "../login/login.component";
import {routing} from "./angular.routing";
import {RegisterComponent} from "../register/register.component";
import {ClientComponent} from "../client/client.component";
import {ClientListComponent} from "../client/client-list.component";
import {ClientEditComponent} from "../client/client-edit.component";
import {CommandeComponent} from "../commande/commande.component";
import {CommandeListComponent} from "../commande/commande-list.component";
import {AboutComponent} from "../informations/about.component";
import {ContactComponent} from "../informations/contact.component";
import {HomeComponent} from "../informations/home.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TranslateModule} from "ng2-translate/ng2-translate";
import {PageHeaderComponent} from "./components/header.component";
import {InputGroupComponent} from "./components/inputgroup.component";
import {ListGroupComponent} from "./components/listgroup.component";
import {ArrayifyPipe, Json2ArrayPipe} from "./pipes/arrayify.pipe";
import {UserService} from "./services/user.service";
import { ItemsService } from './services/items.service';
import { ClientService } from '../client/client.service';
import { NotificationService } from './services/notification.service';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import {Ng2PaginationModule} from 'ng2-pagination';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule,PaginationModule,Ng2PaginationModule,DatepickerModule,Ng2BootstrapModule,ModalModule,ProgressbarModule,TimepickerModule,
        TranslateModule.forRoot(), routing],
    declarations: [AppComponent, LoginComponent, RegisterComponent, ClientComponent, ClientListComponent, ClientEditComponent, CommandeComponent,CommandeListComponent, AboutComponent, ContactComponent, HomeComponent,SlimLoadingBarComponent,
        PageHeaderComponent, InputGroupComponent, ListGroupComponent, ArrayifyPipe, Json2ArrayPipe],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },UserService, SlimLoadingBarService,ItemsService,NotificationService,ClientService],
    bootstrap: [AppComponent]
    
})
export class AppModule {

}
