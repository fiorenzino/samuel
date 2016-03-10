import {Prodotto} from './../model/prodotto';

export class ProdottiService {

    prodotti:Prodotto[];

    constructor() {
        console.log('prodotti service init');
        this.prodotti = [
            new Prodotto(
                '123',
                'prodotto1',
                'angular',
                'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                '#E63135',
                123.00
            )
        ]
    }
}