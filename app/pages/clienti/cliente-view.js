var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var ionic_angular_2 = require('ionic-angular');
var cliente_edit_1 = require('./cliente-edit');
var ClienteView = (function () {
    function ClienteView(nav, params) {
        this.nav = nav;
        this.cliente = params.data.cliente;
    }
    ClienteView.prototype.openNavDetailsPage = function (cliente) {
        this.nav.push(cliente_edit_1.ClienteEdit, { cliente: cliente });
    };
    ClienteView = __decorate([
        ionic_angular_2.Page({
            templateUrl: 'build/pages/clienti/cliente-view.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], ClienteView);
    return ClienteView;
})();
exports.ClienteView = ClienteView;
