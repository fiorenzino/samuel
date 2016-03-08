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
var cliente_view_1 = require('../clienti/cliente-view');
var cliente_edit_1 = require('../clienti/cliente-edit');
var clienti_service_1 = require('../clienti/clienti-service');
var ClientiList = (function () {
    function ClientiList(nav, clientiService) {
        this.nav = nav;
        this.clienti = [];
        this.clientiService = clientiService;
        this.clienti = clientiService.clienti;
    }
    ClientiList.prototype.openNavDetailsPage = function (cliente) {
        if (cliente != null && cliente.name != null) {
            this.nav.push(cliente_view_1.ClienteView, { cliente: cliente });
        }
        else {
            this.nav.push(cliente_edit_1.ClienteEdit, { cliente: {} });
        }
    };
    ClientiList = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/clienti/clienti-list.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, clienti_service_1.ClientiService])
    ], ClientiList);
    return ClientiList;
})();
exports.ClientiList = ClientiList;
