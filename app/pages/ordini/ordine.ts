import {Cliente} from '../clienti/cliente';
import {Prodotto} from '../prodotti/prodotto';

export class Ordine {

    id:number;
    note:string;
    data:string;
    cliente:Cliente;
    prodotti = [];

    constructor() {

    }
}