import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Http} from "@angular/http";
import {User} from "../models/user";

@Injectable()
export class UserService extends HttpService {

    private _user:User = null;

    constructor(http:Http) {
        super(http);
    }


    get user():User {
        return this._user;
    }

    set user(value:User) {
        debugger;
        this._user = value;
    }

    isLogged(): boolean {
        return this._user != null;
    }
}