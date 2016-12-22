import {Component, Input, OnInit, forwardRef} from '@angular/core';
import {FormControlName, FormGroup, FormControl , NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputGroupComponent),
    multi: true
};
@Component({
    moduleId: module.id,
    selector: 'input-group',
    templateUrl: 'inputgroup.component.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputGroupComponent implements OnInit , ControlValueAccessor {
    @Input() id:string;
    @Input() label:string;
    @Input() placeholder:string;
    @Input() type:string;
    @Input() form:FormGroup;

    dynamicControl;

    constructor() {
    }

    ngOnInit():void {
        this.dynamicControl = this.form.controls[this.id];
    }
    
     //The internal data model
    private innerValue: any = '';

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