import {Cliente} from './cliente';
import {Prodotto} from './prodotto';
import {ProdottoOrdine} from "./prodotto-ordine";

export class Ordine {

    id:number;
    note:string;
    data:string;
    cliente:Cliente;
    prodotti:ProdottoOrdine[] = [];

    constructor() {

    }


    get total():number {
        if (this.prodotti.length == 0) {
            return 0;
        }
        var totale:number = 0;
        for (var i in this.prodotti) {
            var prodottoOrdine:ProdottoOrdine = this.prodotti[i];
            totale += prodottoOrdine.parziale;
        }
        return totale;
    }


}
