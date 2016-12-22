import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {UserService} from "./services/user.service";

@Component({
    moduleId: module.id,
    selector: 'sban-app',
    templateUrl: 'angular.component.html'
})
export class AppComponent {
    constructor(private translate:TranslateService, private userService:UserService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
