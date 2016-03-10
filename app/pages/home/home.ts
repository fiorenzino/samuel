import {Page, NavController} from 'ionic-angular';
import {OrdiniList} from '../ordini/ordini-list';
import {ProdottiList} from '../prodotti/prodotti-list';
import {Login} from '../login/login';
import {ClientiList} from '../clienti/clienti-list';
import {OrdineEdit} from '../ordini/ordine-edit';
import {Inject, OnInit} from "angular2/core";
import {SecurityService} from "../../services/security-service";
import {ProdottiService} from "../../services/prodotti-service";
import {OrdiniService} from "../../services/ordini-service";
import {ClientiService} from "../../services/clienti-service";


@Page({
    templateUrl: 'build/pages/home/home.html',
})
export class Home implements OnInit {

    prodotti:any;
    ordini:any;
    clienti:any;
    prodottiSize:number;
    ordiniSize:number;
    clientiSize:number;
    pages = [];
    pushPage;
    securityService:SecurityService;

    constructor(public nav:NavController, @Inject(SecurityService) securityService, @Inject(ProdottiService) prodottiService,
                @Inject(OrdiniService) ordiniService, @Inject(ClientiService) clientiService) {
        this.ordini = OrdiniList;
        this.prodotti = ProdottiList;
        this.clienti = ClientiList;
        this.prodottiSize = prodottiService.prodotti.length;
        this.ordiniSize = ordiniService.ordini.length;
        this.clientiSize = clientiService.clienti.length;
        this.pages = [
            {title: 'Clienti', component: ClientiList, icon: "people", size: this.clientiSize},
            {title: 'Catalogo Prodotti', component: ProdottiList, icon: "list", size: this.prodottiSize},
            {title: 'Ordini', component: OrdiniList, icon: "clipboard", size: this.ordiniSize},
            {title: 'Nuovo Ordine', component: OrdineEdit, icon: "add-circle", size: '0'},
            {title: 'Sincronizzazione Dati', component: OrdineEdit, icon: "refresh-circle", size: '0'}
        ];
        this.pushPage = OrdiniList;
        this.securityService = securityService;
    }


    ngOnInit() {
        console.log(this.securityService.isLogged());
        if (!this.securityService.isLogged()) {
            this.nav.setRoot(Login);
        }

    }


    gotoClienti() {
        this.nav.setRoot(ClientiList);
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }

    logout() {
        this.securityService.logout();
        this.nav.setRoot(Login);
    }


}
