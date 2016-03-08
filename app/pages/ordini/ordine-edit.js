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
var prodotti_service_1 = require('../prodotti/prodotti-service');
var ordine_1 = require('../ordini/ordine');
var core_1 = require('angular2/core');
var OrdineEdit = (function () {
    function OrdineEdit(prodottiService, clientiService) {
        this.prodotti = [];
        this.prodottiService = prodottiService;
        this.prodotti = this.prodottiService.prodotti;
        this.ordine = new ordine_1.Ordine();
        this.clienti = clientiService;
    }
    OrdineEdit.prototype.save = function () {
    };
    OrdineEdit = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/ordini/ordine-edit.html'
        }),
        __param(0, core_1.Inject(prodotti_service_1.ProdottiService)),
        __param(1, core_1.Inject(ClientiService)), 
        __metadata('design:paramtypes', [Object, Object])
    ], OrdineEdit);
    return OrdineEdit;
})();
exports.OrdineEdit = OrdineEdit;
