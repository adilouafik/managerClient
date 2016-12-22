import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http, RequestOptions, Headers} from "@angular/http";
import {FormGroup} from "@angular/forms";
import {HttpService} from "../app/services/http.service";

@Injectable()
export class RegisterService extends HttpService {

    constructor(http:Http) {
        super(http);
    }

    register(model:FormGroup):Observable<any> {
        let body = JSON.stringify(model.value);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .post("http://localhost:8088/register", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}