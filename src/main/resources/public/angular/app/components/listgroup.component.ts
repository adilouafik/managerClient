import {Component, Input, Output, EventEmitter, OnInit , forwardRef} from '@angular/core';
import {FormControlName, FormGroup, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import { FieldInfo } from './fieldInfo';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ListGroupComponent),
    multi: true
};
@Component({
    moduleId: module.id,
    selector: 'list-group',
    templateUrl: 'listgroup.component.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ListGroupComponent implements OnInit , ControlValueAccessor {
    @Input() fieldInfo: FieldInfo;
    @Input() label:string;
    @Input() form:FormGroup;
    @Input() id:string;
    @Output() selectValueEvent: EventEmitter<any> = new EventEmitter(false);
     //The internal data model
    private innerValue: any = '';
 
    dynamicControl;

    constructor() {
    }

    ngOnInit():void {
        this.dynamicControl = this.form.controls[this.id];
    }

    onSelect(newValue) {
         this.selectValueEvent.emit(newValue);
    } 

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    
}