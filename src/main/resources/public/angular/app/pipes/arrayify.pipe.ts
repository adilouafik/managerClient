import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'arrayify'
})
export class ArrayifyPipe implements PipeTransform {
    transform(value:any, args:any[]):any {
        return Array.isArray(value)
            ? value : [value];
    }
}

@Pipe({
    name: 'json2array'
})
export class Json2ArrayPipe implements PipeTransform {
    transform(value:any, args:any[]):any {
        return Object
            .keys(value)
            .map((key)=> {
                return {key: key, value: value[key]}
            })
    }
}