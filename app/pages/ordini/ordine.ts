import {Cliente} from '../clienti/cliente';
export class Ordine {

    cliente:Cliente;
    prodotti=[];

    constructor(cliente:Cliente) {
        this.prodotti = [];
        this.cliente=cliente;
    }
}