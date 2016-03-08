
import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';

@Page({
    templateUrl: 'build/pages/clienti/cliente-edit.html',
})
export class ClienteEdit {

    cliente: any;

    constructor(params: NavParams) {
        if ( params.data.cliente != null ) {
            this.cliente = params.data.cliente;
        }
        else {
            this.cliente = {};
        }
    }
}