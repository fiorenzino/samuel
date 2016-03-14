import {Prodotto} from "./prodotto";
export class ProdottoOrdine {
    quantita:number;
    parziale:number;

    constructor(public prodotto:Prodotto) {
        this.quantita = 1;
        this.parziale = (this.quantita * this.prodotto.price);
    }

    incr() {
        this.quantita = this.quantita + 1;
        this.parziale = (this.quantita * this.prodotto.price);
    }

    decr() {
        if (this.quantita > 1) {
            this.quantita = this.quantita - 1;
            this.parziale = (this.quantita * this.prodotto.price);
        }
    }


}
