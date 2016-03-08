
import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';

@Page({
    templateUrl: 'build/pages/prodotti/prodotto-view.html',
})
export class ProdottoView {
    prodotto: any;

    constructor(params: NavParams) {
        this.prodotto = params.data.prodotto;
    }
}