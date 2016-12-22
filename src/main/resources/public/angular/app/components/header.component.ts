import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-header',
    template: "<h1 class='section-heading'>{{title}}</h1>"
})
export class PageHeaderComponent{
    @Input() title: string;

    constructor() { }

}