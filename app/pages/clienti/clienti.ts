import {Page, NavController} from 'ionic-angular';
import {Cliente} from '../clienti/cliente';

@Page({
    templateUrl: 'build/pages/clienti/clienti.html'
})
export class Clienti {
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
        this.nav.push(Cliente, {cliente: cliente});
    }
}
