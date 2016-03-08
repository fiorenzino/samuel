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
var prodotti_list_1 = require('../prodotti/prodotti-list');
var ordini_list_1 = require('../ordini/ordini-list');
var home_1 = require('../home/home');
var clienti_list_1 = require('../clienti/clienti-list');
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = home_1.Home;
        this.tab2Root = clienti_list_1.ClientiList;
        this.tab3Root = prodotti_list_1.ProdottiList;
        this.tab4Root = ordini_list_1.OrdiniList;
    }
    TabsPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/tabs/tabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
})();
exports.TabsPage = TabsPage;
