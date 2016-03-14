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
var prodotti_list_1 = require('../prodotti/prodotti-list');
var ordini_list_1 = require('../ordini/ordini-list');
var home_1 = require('../home/home');
var clienti_list_1 = require('../clienti/clienti-list');
var security_service_1 = require("../../services/security-service");
var core_1 = require("angular2/core");
var login_1 = require('../login/login');
var TabsPage = (function () {
    function TabsPage(nav, securityService) {
        this.nav = nav;
        this.securityService = securityService;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = home_1.Home;
        this.tab2Root = clienti_list_1.ClientiList;
        this.tab3Root = prodotti_list_1.ProdottiList;
        this.tab4Root = ordini_list_1.OrdiniList;
    }
    TabsPage.prototype.ngOnInit = function () {
        console.log(this.securityService.isLogged());
        if (!this.securityService.isLogged()) {
            //this.nav.push(Login);
            this.nav.setRoot(login_1.Login);
            this.nav.popToRoot();
        }
    };
    TabsPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/tabs/tabs.html'
        }),
        __param(1, core_1.Inject(security_service_1.SecurityService)), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, Object])
    ], TabsPage);
    return TabsPage;
})();
exports.TabsPage = TabsPage;
