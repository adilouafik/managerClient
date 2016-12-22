import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

export abstract class FormComponent implements OnInit {
    form:FormGroup;

    constructor(protected formBuilder:FormBuilder) {
    }

    abstract ngOnInit()

    abstract onSubmitForm()
}