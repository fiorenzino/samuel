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
var ordini_1 = require('../ordini/ordini');
var prodotti_1 = require('../prodotti/prodotti');
var clienti_1 = require('../clienti/clienti');
var Home = (function () {
    function Home(nav) {
        this.nav = nav;
        this.pages = [];
        this.ordini = ordini_1.Ordini;
        this.prodotti = prodotti_1.Prodotti;
        this.clienti = clienti_1.Clienti;
        this.pages = [
            { title: 'Clienti', component: clienti_1.Clienti, icon: "people" },
            { title: 'Prodotti', component: prodotti_1.Prodotti, icon: "list" },
            { title: 'Ordini', component: ordini_1.Ordini, icon: "clipboard" }
        ];
        this.pushPage = ordini_1.Ordini;
    }
    Home.prototype.gotoClienti = function () {
        this.nav.setRoot(clienti_1.Clienti);
    };
    Home.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    Home = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/home/home.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], Home);
    return Home;
})();
exports.Home = Home;
