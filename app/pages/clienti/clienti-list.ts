import {Page, NavController} from 'ionic-angular';
import {ClienteView} from '../clienti/cliente-view';
import {ClienteEdit} from '../clienti/cliente-edit';
import {ClientiService} from '../../services/clienti-service';

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
        if ( cliente != null && cliente.name != null ) {
            this.nav.push(ClienteView, {cliente: cliente});
        }
        else {
            this.nav.push(ClienteEdit, {cliente: { } });
        }
    }

}