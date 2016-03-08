
import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {Prodotto} from './prodotto';

@Page({
    templateUrl: 'build/pages/prodotti/prodotto-view.html',
})
export class ProdottoEdit {
    prodotto: Prodotto;

    constructor(params: NavParams) {
        this.prodotto = params.data.prodotto;
    }


}