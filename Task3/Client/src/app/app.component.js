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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.response = "";
    }
    AppComponent.prototype.onPingClick = function () {
        var _this = this;
        var get1 = this.http.get("http://localhost:8888/get1").toPromise();
        var get2 = this.http.get("http://localhost:8888/get2").toPromise();
        Promise.all([get1, get2]).then(function (responses) {
            responses.forEach(function (response) {
                _this.handleResponse(response);
            });
            _this.http.get("http://localhost:8888/get3").toPromise().then(function (response) {
                _this.handleResponse(response);
            }).catch(function (err) {
                _this.handleResponse(err);
            });
        }).catch(function (err) {
            _this.handleResponse(err);
        });
    };
    AppComponent.prototype.handleResponse = function (response) {
        var success = response.status == 200;
        this.response += "\nurl: " + response.url + (success ? " succeeded with: " : " failed with: ") + response.text();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>PingPong</h1>\n    <button (click)=\"onPingClick()\">Ping</button>\n    <br/>\n    <pre>Responses: {{response}}</pre>\n    <br/>",
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map