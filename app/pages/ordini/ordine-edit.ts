import {Page, NavController} from 'ionic-angular';
import {ProdottiService} from '../../services/prodotti-service';
import {Ordine} from '../../model/ordine';
import {Inject} from 'angular2/core';
import {Cliente} from '../../model/cliente';
import {ClientiService} from '../../services/clienti-service';
import {OrdiniList} from './ordini-list';
import {OrdiniService} from '../../services/ordini-service';
import {NgForm, FORM_DIRECTIVES} from "angular2/common";


@Page({
    templateUrl: 'build/pages/ordini/ordine-edit.html',
    directives: [FORM_DIRECTIVES]
})
export class OrdineEdit {
    edit:boolean = true;
    prodottiService:ProdottiService;
    clientiService:ClientiService;
    prodotti = [];
    ordine:Ordine;
    clienti:Cliente[];
    ordiniService:OrdiniService;
    ordini = [];

    constructor(@Inject(OrdiniService) ordiniService, @Inject(ProdottiService) prodottiService, @Inject(ClientiService) clientiService, public nav:NavController) {
       console.log('creo ordini edit');
        this.clienti = clientiService.clienti;
        this.ordiniService = ordiniService;
        this.ordine = this.ordiniService.ordine;
        console.log(JSON.stringify(this.ordine));

    }

    save() {
        this.ordiniService.add(this.ordine);
        this.nav.pop(OrdineEdit);
        this.nav.setRoot(OrdiniList);
    }

    undo() {
        this.nav.pop(OrdineEdit);
        this.nav.setRoot(OrdiniList);
    }
}
