import {Page, NavController} from 'ionic-angular';
import {OrdineEdit} from '../ordini/ordine-edit';
import {Ordine} from './ordine';


@Page({
    templateUrl: 'build/pages/ordini/ordini-list.html'
})
export class OrdiniList {

    constructor(public nav:NavController) {

    }


    addOrdine() {
        this.nav.setRoot(OrdineEdit);
    }

}
