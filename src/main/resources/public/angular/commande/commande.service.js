"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var http_service_1 = require("../app/services/http.service");
var client_1 = require('../app/models/client');
var items_service_1 = require('../app/services/items.service');
var CommandeService = (function (_super) {
    __extends(CommandeService, _super);
    function CommandeService(http, itemsService) {
        _super.call(this, http);
        this.itemsService = itemsService;
    }
    CommandeService.prototype.register = function (model) {
        var body = JSON.stringify(model.value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post("http://localhost:8088/addcommande", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommandeService.prototype.update = function (model) {
        var body = JSON.stringify(model.value);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .patch("http://localhost:8088/updatecommande", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommandeService.prototype.getCommandes = function (page, itemsPerPage) {
        var _this = this;
        var peginatedResult = new client_1.PaginatedResult();
        var headers = new http_1.Headers();
        if (page != null && itemsPerPage != null) {
            headers.append('Pagination', page + ',' + itemsPerPage);
        }
        headers.append('Pagination', page + ',' + itemsPerPage);
        return this.http.get("http://localhost:8088/listcommande", {
            headers: headers
        })
            .map(function (res) {
            console.log(res.headers.keys());
            peginatedResult.result = res.json();
            if (res.headers.get("Pagination") != null) {
                var paginationHeader = _this.itemsService.getSerialized(JSON.parse(res.headers.get("Pagination")));
                console.log(paginationHeader);
                peginatedResult.pagination = paginationHeader;
            }
            return peginatedResult;
        })
            .catch(this.handleError);
    };
    CommandeService.prototype.viewCommandeDetails = function (id) {
        return this.http.get("http://localhost:8088/getcommande/" + id)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    CommandeService.prototype.deleteCommande = function (id) {
        return this.http.delete("http://localhost:8088/deletecommande/" + id)
            .map(function (res) {
            return;
        })
            .catch(this.handleError);
    };
    CommandeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, items_service_1.ItemsService])
    ], CommandeService);
    return CommandeService;
}(http_service_1.HttpService));
exports.CommandeService = CommandeService;
//# sourceMappingURL=commande.service.js.map