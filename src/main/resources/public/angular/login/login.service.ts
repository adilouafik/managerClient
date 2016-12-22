import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpService} from "../app/services/http.service";
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class LoginService extends HttpService {

    constructor(http:Http) {
        super(http);
    }

    login(form:FormGroup) {
        let body = JSON.stringify(form.value);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .post("http://localhost:8088/login", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}