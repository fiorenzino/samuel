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
var prodotti_service_1 = require('../../services/prodotti-service');
var core_1 = require('angular2/core');
var clienti_service_1 = require('../../services/clienti-service');
var ordini_service_1 = require('../../services/ordini-service');
var common_1 = require("angular2/common");
var OrdineEdit = (function () {
    function OrdineEdit(ordiniService, prodottiService, clientiService, nav) {
        this.ordiniService = ordiniService;
        this.prodottiService = prodottiService;
        this.clientiService = clientiService;
        this.nav = nav;
        this.edit = true;
        this.prodotti = [];
        this.ordini = [];
        console.log('creo ordini edit');
        this.clienti = clientiService.clienti;
        this.ordine = this.ordiniService.ordine;
        console.log(JSON.stringify(this.ordine));
    }
    OrdineEdit.prototype.decr = function (id) {
        this.ordiniService.decrProdotto(id);
        console.log('decr: ' + id);
    };
    OrdineEdit.prototype.incr = function (id) {
        this.ordiniService.incrProdotto(id);
        console.log('incr: ' + id);
    };
    OrdineEdit.prototype.save = function () {
        this.ordiniService.save(this.ordine);
        this.nav.pop();
        //this.nav.setRoot(OrdiniList);
    };
    OrdineEdit.prototype.undo = function () {
        this.ordiniService.reset();
        this.nav.pop();
        //this.nav.setRoot(OrdiniList);
    };
    OrdineEdit = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/ordini/ordine-edit.html',
            directives: [common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(ordini_service_1.OrdiniService)),
        __param(1, core_1.Inject(prodotti_service_1.ProdottiService)),
        __param(2, core_1.Inject(clienti_service_1.ClientiService)), 
        __metadata('design:paramtypes', [Object, Object, Object, ionic_angular_1.NavController])
    ], OrdineEdit);
    return OrdineEdit;
})();
exports.OrdineEdit = OrdineEdit;
