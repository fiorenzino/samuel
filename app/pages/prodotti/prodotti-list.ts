import {Page, NavController} from 'ionic-angular';
import {ProdottoView} from '../prodotti/prodotto-view';
import {ProdottiService} from './../../services/prodotti-service';


@Page({
    templateUrl: 'build/pages/prodotti/prodotti-list.html',
})
export class ProdottiList {
    prodotti = [];
    prodottiService:ProdottiService;

    constructor(public nav:NavController, prodottiService:ProdottiService) {
        this.prodottiService = prodottiService;
        this.prodotti=prodottiService.prodotti;
    }

    openNavDetailsPage(prodotto) {
        this.nav.push(ProdottoView, {prodotto: prodotto});
    }
}
