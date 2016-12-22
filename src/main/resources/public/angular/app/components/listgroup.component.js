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
var forms_1 = require("@angular/forms");
var fieldInfo_1 = require('./fieldInfo');
var noop = function () {
};
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return ListGroupComponent; }),
    multi: true
};
var ListGroupComponent = (function () {
    function ListGroupComponent() {
        this.selectValueEvent = new core_1.EventEmitter(false);
        //The internal data model
        this.innerValue = '';
        //Placeholders for the callbacks which are later providesd
        //by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    ListGroupComponent.prototype.ngOnInit = function () {
        this.dynamicControl = this.form.controls[this.id];
    };
    ListGroupComponent.prototype.onSelect = function (newValue) {
        this.selectValueEvent.emit(newValue);
    };
    Object.defineProperty(ListGroupComponent.prototype, "value", {
        //get accessor
        get: function () {
            return this.innerValue;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    ListGroupComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    ListGroupComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    //From ControlValueAccessor interface
    ListGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    ListGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', fieldInfo_1.FieldInfo)
    ], ListGroupComponent.prototype, "fieldInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListGroupComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], ListGroupComponent.prototype, "form", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListGroupComponent.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ListGroupComponent.prototype, "selectValueEvent", void 0);
    ListGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-group',
            templateUrl: 'listgroup.component.html',
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], ListGroupComponent);
    return ListGroupComponent;
}());
exports.ListGroupComponent = ListGroupComponent;
//# sourceMappingURL=listgroup.component.js.map