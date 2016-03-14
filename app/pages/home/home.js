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
        this.securityService = securityService;
        this.prodottiService = prodottiService;
        this.ordiniService = ordiniService;
        this.clientiService = clientiService;
        this.prodottiSize = prodottiService.prodotti.length;
        this.ordiniSize = ordiniService.ordini.length;
        this.clientiSize = clientiService.clienti.length;
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
        this.app.getComponent("tabs").select(1);
        //this.nav.setRoot(ClientiList);
    };
    Home.prototype.gotoProdotti = function () {
        this.app.getComponent("tabs").select(2);
        //this.nav.setRoot(ProdottiList);
    };
    Home.prototype.gotoOrdini = function () {
        this.app.getComponent("tabs").select(3);
        //this.nav.setRoot(OrdiniList);
    };
    Home.prototype.gotoNuovoOrdine = function () {
        //this.app.getComponent("tabs").select(3);
        this.nav.setRoot(ordine_edit_1.OrdineEdit);
    };
    Home.prototype.gotoSincronizzazioneDati = function () {
        this.nav.setRoot(Home);
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
