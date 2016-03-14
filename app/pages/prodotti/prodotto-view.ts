
import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AddProdotto} from "../ordini/add-prodotto";

@Page({
    templateUrl: 'build/pages/prodotti/prodotto-view.html',
    directives: [AddProdotto]
})
export class ProdottoView {
    prodotto: any;

    constructor(params: NavParams) {
        this.prodotto = params.data.prodotto;
    }
}
