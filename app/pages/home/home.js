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
var ordini_list_1 = require('../ordini/ordini-list');
var prodotti_list_1 = require('../prodotti/prodotti-list');
var clienti_list_1 = require('../clienti/clienti-list');
var ordine_edit_1 = require('../ordini/ordine-edit');
//import {Inject, OnInit} from "angular2/core";
var core_1 = require("angular2/core");
var security_service_1 = require("../../services/security-service");
var prodotti_service_1 = require("../../services/prodotti-service");
var ordini_service_1 = require("../../services/ordini-service");
var clienti_service_1 = require("../../services/clienti-service");
var Home = (function () {
    function Home(app, nav, securityService, prodottiService, ordiniService, clientiService) {
        this.app = app;
        this.nav = nav;
        this.pages = [];
        this.ordini = ordini_list_1.OrdiniList;
        this.prodotti = prodotti_list_1.ProdottiList;
        this.clienti = clienti_list_1.ClientiList;
        this.prodottiSize = prodottiService.prodotti.length;
        this.ordiniSize = ordiniService.ordini.length;
        this.clientiSize = clientiService.clienti.length;
        this.pages = [
            { title: 'Clienti', component: clienti_list_1.ClientiList, icon: "people", size: this.clientiSize, index: 1 },
            { title: 'Catalogo Prodotti', component: prodotti_list_1.ProdottiList, icon: "list", size: this.prodottiSize, index: 2 },
            { title: 'Ordini', component: ordini_list_1.OrdiniList, icon: "clipboard", size: this.ordiniSize, index: 3 },
            { title: 'Nuovo Ordine', component: ordine_edit_1.OrdineEdit, icon: "add-circle", size: '0', index: 4 },
            { title: 'Sincronizzazione Dati', component: ordine_edit_1.OrdineEdit, icon: "refresh-circle", size: '0', index: 4 }
        ];
        this.pushPage = ordini_list_1.OrdiniList;
        this.securityService = securityService;
    }
    /*
    ngOnInit() {
        console.log(this.securityService.isLogged());
        if (!this.securityService.isLogged()) {
            this.nav.setRoot(Login);
        }

    }
    */
    Home.prototype.gotoClienti = function () {
        this.nav.setRoot(clienti_list_1.ClientiList);
    };
    Home.prototype.openPage = function (page) {
        this.app.getComponent("tabs").select(page.index);
        //        this.nav.setRoot(page.component);
    };
    Home.prototype.logout = function () {
        this.securityService.logout();
        this.nav.pop();
    };
    Home = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/home/home.html',
        }),
        __param(2, core_1.Inject(security_service_1.SecurityService)),
        __param(3, core_1.Inject(prodotti_service_1.ProdottiService)),
        __param(4, core_1.Inject(ordini_service_1.OrdiniService)),
        __param(5, core_1.Inject(clienti_service_1.ClientiService)), 
        __metadata('design:paramtypes', [ionic_angular_1.IonicApp, ionic_angular_1.NavController, Object, Object, Object, Object])
    ], Home);
    return Home;
})();
exports.Home = Home;
