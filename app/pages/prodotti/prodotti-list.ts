import {Page, NavController} from 'ionic-angular';
import {ProdottoView} from '../prodotti/prodotto-view';
import {ProdottiService} from './../../services/prodotti-service';
import {Inject} from "angular2/core";


@Page({
    templateUrl: 'build/pages/prodotti/prodotti-list.html',
})
export class ProdottiList {
    searchQuery = '';
    prodotti = [];

    constructor(public nav:NavController,
                @Inject(ProdottiService) public prodottiService) {
        this.prodotti = prodottiService.prodotti;
    }

    openNavDetailsPage(prodotto) {
        this.nav.push(ProdottoView, {prodotto: prodotto});
    }

    getItems(searchbar) {
        this.prodotti = this.prodottiService.prodotti;
        // set q to the value of the searchbar
        var q = searchbar.value;

        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }

        this.prodotti = this.prodotti.filter((v) => {
            if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        })
    }
}
