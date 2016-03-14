import {Page, NavController, IonicApp} from 'ionic-angular';
import {OrdiniList} from '../ordini/ordini-list';
import {ProdottiList} from '../prodotti/prodotti-list';
import {Login} from '../login/login';
import {TabsPage} from '../tabs/tabs';
import {ClientiList} from '../clienti/clienti-list';
import {OrdineEdit} from '../ordini/ordine-edit';
//import {Inject, OnInit} from "angular2/core";
import {Inject} from "angular2/core";
import {SecurityService} from "../../services/security-service";
import {ProdottiService} from "../../services/prodotti-service";
import {OrdiniService} from "../../services/ordini-service";
import {ClientiService} from "../../services/clienti-service";


@Page({
    templateUrl: 'build/pages/home/home.html',
})
//export class Home implements OnInit {
export class Home {
    prodottiSize:number;
    ordiniSize:number;
    clientiSize:number;

    constructor(public app: IonicApp,
                public nav:NavController,
                @Inject(SecurityService) public securityService,
                @Inject(ProdottiService) public prodottiService,
                @Inject(OrdiniService) public ordiniService,
                @Inject(ClientiService) public clientiService) {
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


    gotoClienti() {
        this.app.getComponent("tabs").select(1);
        //this.nav.setRoot(ClientiList);
    }
    gotoProdotti() {
        this.app.getComponent("tabs").select(2);
        //this.nav.setRoot(ProdottiList);
    }

    gotoOrdini() {
        this.app.getComponent("tabs").select(3);
        //this.nav.setRoot(OrdiniList);
    }

    gotoNuovoOrdine(){
        //this.app.getComponent("tabs").select(3);
        this.nav.setRoot(OrdineEdit);
    }

    gotoSincronizzazioneDati(){
        this.nav.setRoot(Home);
    }

    logout() {
        this.securityService.logout();
        this.nav.pop();
    }


}
