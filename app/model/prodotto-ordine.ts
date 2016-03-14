import {Prodotto} from "./prodotto";
export class ProdottoOrdine {
    quantita:number;
    parziale:number;

    constructor(public prodotto:Prodotto) {
        this.quantita = 1;
        this.parziale = (this.quantita*this.prodotto.price);
    }

    decr() {
        this.quantita = this.quantita + 1;
        this.parziale = (this.quantita*this.prodotto.price);
    }

    incr() {
        if (this.quantita > 1) {
            this.quantita = this.quantita - 1;
            this.parziale = (this.quantita*this.prodotto.price);
        }
    }


}
