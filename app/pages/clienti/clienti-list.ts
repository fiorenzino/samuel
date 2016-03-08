import {Page, NavController} from 'ionic-angular';
import {ClienteView} from '../clienti/cliente-view';
import {ClienteNew} from '../clienti/cliente-new';

@Page({
    templateUrl: 'build/pages/clienti/clienti-list.html'
})
export class ClientiList {
    clienti = [];


    constructor(public nav:NavController) {
        this.clienti = [
            {
                'name': 'Ict Group',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Manutencoop',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'HTML5',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'JavaScript',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Sass',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'NodeJS',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Python',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Markdown',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Tux',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
        ]
    }

    openNavDetailsPage(cliente) {
        this.nav.push(ClienteView, {cliente: cliente});
    }

    goToNewCliente(){
        this.nav.push(ClienteNew);
    }
}
