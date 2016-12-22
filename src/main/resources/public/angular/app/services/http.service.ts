import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {ErrorData} from "../models/errorData";
export abstract class HttpService {
    constructor(protected http:Http) {
    }

    protected extractData(res:Response) {
        return res || {};
    }

    protected handleError(error:Response) {
        let errMsg = <ErrorData[]>error.json();
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}