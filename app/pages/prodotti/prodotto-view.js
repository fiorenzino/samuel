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
var add_prodotto_1 = require("../ordini/add-prodotto");
var ProdottoView = (function () {
    function ProdottoView(params) {
        this.prodotto = params.data.prodotto;
    }
    ProdottoView = __decorate([
        ionic_angular_2.Page({
            templateUrl: 'build/pages/prodotti/prodotto-view.html',
            directives: [add_prodotto_1.AddProdotto]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavParams])
    ], ProdottoView);
    return ProdottoView;
})();
exports.ProdottoView = ProdottoView;
