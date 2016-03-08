
import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';

@Page({
    templateUrl: 'build/pages/clienti/view-cliente.html',
})
export class ViewCliente {
    cliente: any;

    constructor(params: NavParams) {
        this.cliente = params.data.cliente;
    }
}