var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ordine_edit_1 = require('./ordine-edit');
var ionic_angular_1 = require('ionic-angular');
var ordini_service_1 = require('../../services/ordini-service');
var ordine_view_1 = require('./ordine-view');
var OrdiniList = (function () {
    function OrdiniList(nav, ordiniService) {
        this.nav = nav;
        this.searchQuery = '';
        this.ordini = [];
        this.ordiniService = ordiniService;
        this.ordini = ordiniService.ordini;
    }
    OrdiniList.prototype.openNavDetailsPage = function (ordine) {
        this.nav.push(ordine_view_1.OrdineView, { id: ordine.id });
    };
    OrdiniList.prototype.getItems = function (searchbar) {
        this.ordini = this.ordiniService.ordini;
        // set q to the value of the searchbar
        var q = searchbar.value;
        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }
        this.ordini = this.ordini.filter(function (v) {
            if (v.cliente.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    OrdiniList.prototype.addOrdine = function () {
        this.nav.push(ordine_edit_1.OrdineEdit);
    };
    OrdiniList = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/ordini/ordini-list.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ordini_service_1.OrdiniService])
    ], OrdiniList);
    return OrdiniList;
})();
exports.OrdiniList = OrdiniList;
