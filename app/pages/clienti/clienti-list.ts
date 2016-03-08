import {Page, NavController} from 'ionic-angular';
import {ClienteView} from '../clienti/cliente-view';
import {ClientiService} from '../clienti/clienti-service';

@Page({
    templateUrl: 'build/pages/clienti/clienti-list.html'
})
export class ClientiList {
    clienti = [];
    clientiService:ClientiService;

    constructor(public nav:NavController, clientiService:ClientiService) {
        this.clientiService = clientiService;
        this.clienti = clientiService.clienti;
    }

    openNavDetailsPage(cliente) {
        this.nav.push(ClienteView, {cliente: cliente});
    }
}