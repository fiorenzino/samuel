import {Prodotto} from "./prodotto";
export class ProdottoOrdine {
    prodotto:Prodotto;
    quantita:number;
    parziale:number;

    constructor(prodotto:Prodotto) {
        this.prodotto = prodotto;
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