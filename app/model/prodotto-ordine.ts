import {Prodotto} from "./prodotto";
export class ProdottoOrdine {
    quantita:number;
    parziale:number;

    constructor(public prodotto:Prodotto) {
        this.quantita = 1;
        this.parziale = (this.quantita*this.prodotto.price);
    }

    add() {
        this.quantita += 1;
        this.parziale = (this.quantita*this.prodotto.price);
    }

    remove() {
        if (this.quantita > 1) {
            this.quantita -= 1;
            this.parziale = (this.quantita*this.prodotto.price);
        }
    }


}
