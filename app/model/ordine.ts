import {Cliente} from './cliente';
import {Prodotto} from './prodotto';

export class Ordine {

    id:number;
    note:string;
    data:string;
    cliente:Cliente;
    prodotti = [];

    constructor() {

    }
}