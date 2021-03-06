import {OrdineEdit} from './ordine-edit';
import {Page, NavController} from 'ionic-angular';
import {OrdiniService} from '../../services/ordini-service';
import {OrdineView} from './ordine-view';
import {Inject} from "angular2/core";


@Page({
    templateUrl: 'build/pages/ordini/ordini-list.html',
})
export class OrdiniList {
    searchQuery = '';
    ordini = [];

    constructor(public nav:NavController,
                @Inject(OrdiniService) public ordiniService) {
        this.ordini = ordiniService.ordini;
    }

    openNavDetailsPage(ordine) {
        this.nav.push(OrdineView, {ordine: ordine});
    }

    getItems(searchbar) {
        this.ordini = this.ordiniService.ordini;
        // set q to the value of the searchbar
        var q = searchbar.value;

        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }

        this.ordini = this.ordini.filter((v) => {
            if (v.cliente.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        })
    }

    addOrdine() {
        this.nav.push(OrdineEdit);
    }

}
