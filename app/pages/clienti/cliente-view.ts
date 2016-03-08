
import {NavController, NavParams} from 'ionic-angular';
import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {ClienteEdit} from './cliente-edit';

@Page({
    templateUrl: 'build/pages/clienti/cliente-view.html',
})
export class ClienteView {
    cliente: any;

    constructor(public nav:NavController, params: NavParams) {
        this.cliente = params.data.cliente;
    }

    openNavDetailsPage(cliente) {
        this.nav.push(ClienteEdit, {cliente: cliente});
    }

}