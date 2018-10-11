"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var account_model_1 = require("./account/account.model");
var AppComponent = (function () {
    function AppComponent() {
        this._accounts = [
            { id: 100, title: "Banco De Oro", description: "Makati Branch", balance: 500000 },
            new account_model_1.Account(101, "Philippine National Bank", "Paranaque", 300000)
        ];
        this._nextId = 102;
        this._selected = [false, false]; // deselect the first two accounts.
    }
    AppComponent.prototype.createAcc = function (title, desc, bal) {
        this._accounts.push(new account_model_1.Account(this._nextId, title.value, desc.value, bal.value));
        this._nextId++;
        this._selected.push(false);
        title.value = "";
        desc.value = "";
        bal.value = 0;
    };
    AppComponent.prototype.removeAcc = function (index) {
        this._accounts.splice(index, 1);
        this._selected.splice(index, 1); // delete index of the selected status.
    };
    AppComponent.prototype.select = function (index) {
        this._selected[index] = !this._selected[index];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map