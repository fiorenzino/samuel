import {Page} from 'ionic-angular';
import {ProdottiService} from '../prodotti/prodotti-service';
import {Ordine} from '../ordini/ordine';
import {Inject} from 'angular2/core';
import {Cliente} from '../clienti/cliente';
import {ClientiService} from '../clienti/clienti-service';


@Page({
    templateUrl: 'build/pages/ordini/ordine-edit.html'
})
export class OrdineEdit {
    prodottiService:ProdottiService;
    clientiService:ClientiService;
    prodotti = [];
    ordine:Ordine;
    clienti:Cliente[];

    constructor(@Inject(ProdottiService) prodottiService, @Inject(ClientiService) clientiService) {
        this.prodottiService = prodottiService;
        this.prodotti = this.prodottiService.prodotti;
        this.ordine = new Ordine();
        this.clienti = clientiService.clienti;
    }

    save() {

    }
}
