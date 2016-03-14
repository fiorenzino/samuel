var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ionic_angular_1 = require('ionic-angular');
var cliente_view_1 = require('../clienti/cliente-view');
var cliente_edit_1 = require('../clienti/cliente-edit');
var clienti_service_1 = require('../../services/clienti-service');
var core_1 = require("angular2/core");
var ClientiList = (function () {
    function ClientiList(nav, clientiService) {
        this.nav = nav;
        this.clientiService = clientiService;
        this.searchQuery = '';
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
    ClientiList.prototype.getItems = function (searchbar) {
        this.clienti = this.clientiService.clienti;
        // set q to the value of the searchbar
        var q = searchbar.value;
        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }
        this.clienti = this.clienti.filter(function (v) {
            if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    ClientiList = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/clienti/clienti-list.html'
        }),
        __param(1, core_1.Inject(clienti_service_1.ClientiService)), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, Object])
    ], ClientiList);
    return ClientiList;
})();
exports.ClientiList = ClientiList;
