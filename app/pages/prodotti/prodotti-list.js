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
var prodotto_view_1 = require('../prodotti/prodotto-view');
var prodotti_service_1 = require('./../../services/prodotti-service');
var core_1 = require("angular2/core");
var ProdottiList = (function () {
    function ProdottiList(nav, prodottiService) {
        this.nav = nav;
        this.prodottiService = prodottiService;
        this.searchQuery = '';
        this.prodotti = [];
        this.prodotti = prodottiService.prodotti;
    }
    ProdottiList.prototype.openNavDetailsPage = function (prodotto) {
        this.nav.push(prodotto_view_1.ProdottoView, { prodotto: prodotto });
    };
    ProdottiList.prototype.getItems = function (searchbar) {
        this.prodotti = this.prodottiService.prodotti;
        // set q to the value of the searchbar
        var q = searchbar.value;
        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }
        this.prodotti = this.prodotti.filter(function (v) {
            if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    ProdottiList = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/prodotti/prodotti-list.html',
        }),
        __param(1, core_1.Inject(prodotti_service_1.ProdottiService)), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, Object])
    ], ProdottiList);
    return ProdottiList;
})();
exports.ProdottiList = ProdottiList;
