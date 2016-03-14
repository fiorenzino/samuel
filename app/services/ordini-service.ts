import {Ordine} from './../model/ordine';
import {Prodotto} from "../model/prodotto";
export class OrdiniService {
    ordini = [];
    ordine:Ordine;

    constructor() {
        console.log('init ordini service');
        this.ordini = [];
        this.ordine = new Ordine();
    }

    add(ordine:Ordine) {
        this.ordini.push(ordine);
    }

    addProdotto(prodotto:Prodotto) {
        this.ordine.prodotti.push(prodotto);
        console.log('size: ' + this.ordine.prodotti.length);
    }

    reset(){
        this.ordine = new Ordine();
    }

    delete(id:number) {
        for (var ordine in this.ordini) {
            if (ordine.id == id) {
                this.ordini.pop();
                break;
            }
        }
    }
}
