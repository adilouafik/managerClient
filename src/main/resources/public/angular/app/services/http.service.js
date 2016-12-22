"use strict";
var Rx_1 = require("rxjs/Rx");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.extractData = function (res) {
        return res || {};
    };
    HttpService.prototype.handleError = function (error) {
        var errMsg = error.json();
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map