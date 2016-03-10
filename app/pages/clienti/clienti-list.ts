import {Page, NavController} from 'ionic-angular';
import {ClienteView} from '../clienti/cliente-view';
import {ClienteEdit} from '../clienti/cliente-edit';
import {ClientiService} from '../../services/clienti-service';

@Page({
    templateUrl: 'build/pages/clienti/clienti-list.html'
})
export class ClientiList {
    searchQuery = '';
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

    getItems(searchbar) {
        this.clienti = this.clientiService.clienti;
        // set q to the value of the searchbar
        var q = searchbar.value;

        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }

        this.clienti = this.clienti.filter((v) => {
            if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        })
    }

}