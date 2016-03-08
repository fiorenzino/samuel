
import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';

@Page({
    templateUrl: 'build/pages/prodotti/prodotto.html',
})
export class Prodotto {
    prodotto: any;

    constructor(params: NavParams) {
        this.prodotto = params.data.prodotto;
    }
}