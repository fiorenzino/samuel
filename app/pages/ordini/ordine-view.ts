import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {OrdiniService} from "../../services/ordini-service";
import {Inject} from "angular2/core";

@Page({
    templateUrl: 'build/pages/ordini/ordine-view.html',
})
export class OrdineView {
    ordine:any;

    constructor(params:NavParams, @Inject(OrdiniService) ordiniService) {
        this.ordine = ordiniService.ordine;
    }
}