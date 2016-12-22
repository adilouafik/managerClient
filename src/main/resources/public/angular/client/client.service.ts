import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {FormGroup} from "@angular/forms";
import {HttpService} from "../app/services/http.service";
import { Client, Pagination, PaginatedResult } from '../app/models/client';
import { ItemsService } from '../app/services/items.service';
import { NotificationService } from '../app/services/notification.service';

@Injectable()
export class ClientService extends HttpService {

    constructor(http: Http,
        private itemsService: ItemsService) {
          super(http);
}

    register(model:FormGroup):Observable<any> {
        let body = JSON.stringify(model.value);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .post("http://localhost:8088/addclient", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
     update(model:FormGroup):Observable<any> {
        let body = JSON.stringify(model.value);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http
            .patch("http://localhost:8088/updateclient", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    
     getClients(page?: number, itemsPerPage?: number): Observable<PaginatedResult<Client[]>> {
        var peginatedResult: PaginatedResult<Client[]> = new PaginatedResult<Client[]>();

        let headers = new Headers();
        if (page != null && itemsPerPage != null) {
            headers.append('Pagination', page + ',' + itemsPerPage);
        }
         headers.append('Pagination', page + ',' + itemsPerPage);

        return this.http.get("http://localhost:8088/listclient" , {
            headers: headers
        })
            .map((res: Response) => {
                console.log(res.headers.keys())
                peginatedResult.result = res.json();
                if (res.headers.get("Pagination") != null) {
                    var paginationHeader: Pagination = this.itemsService.getSerialized<Pagination>(JSON.parse(res.headers.get("Pagination")));
                    console.log(paginationHeader);
                    peginatedResult.pagination = paginationHeader;
                }
                return peginatedResult;
            })
            .catch(this.handleError);
    }

    viewClientDetails(id: number): Observable<Client> {
        return this.http.get("http://localhost:8088/getclient/" + id)
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
}
    
     deleteClient(id: number): Observable<void> {
        return this.http.delete("http://localhost:8088/deleteclient/" + id)
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }


}