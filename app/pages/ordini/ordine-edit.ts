import {Page, NavController} from 'ionic-angular';
import {ProdottiService} from '../../services/prodotti-service';
import {Ordine} from '../../model/ordine';
import {Inject} from 'angular2/core';
import {Cliente} from '../../model/cliente';
import {ClientiService} from '../../services/clienti-service';
import {OrdiniList} from './ordini-list';
import {OrdiniService} from '../../services/ordini-service';



@Page({
    templateUrl: 'build/pages/ordini/ordine-edit.html'
})
export class OrdineEdit {
    edit:boolean = true;
    prodottiService:ProdottiService;
    clientiService:ClientiService;
    prodotti = [];
    ordine:Ordine;
    clienti:Cliente[];
    ordiniService:OrdiniService;
    ordini=[];

    constructor(@Inject(OrdiniService) ordiniService,@Inject(ProdottiService) prodottiService, @Inject(ClientiService) clientiService, public nav:NavController) {
        this.prodottiService = prodottiService;
        this.prodotti = this.prodottiService.prodotti;
        console.log('numero prodotti:' + this.prodotti.length);
        this.ordine = new Ordine();
        this.clienti = clientiService.clienti;
        console.log('numero clienti:' + this.clienti.length);
        this.ordiniService=ordiniService;
        this.ordini =this.ordiniService.ordini;
        console.log('numero ordini:' + this.ordini.length);
    }

    save() {
        this.ordiniService.add(this.ordine);
        this.ordine= new Ordine();
        this.nav.setRoot(OrdiniList);
    }

    undo() {
        this.nav.setRoot(OrdiniList);
    }
}
