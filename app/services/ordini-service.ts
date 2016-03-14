import {Ordine} from './../model/ordine';
import {Prodotto} from "../model/prodotto";
import {ProdottoOrdine} from "../model/prodotto-ordine";
export class OrdiniService {
    ordini = [];
    ordine:Ordine;

    constructor() {
        console.log('init ordini service');
        this.ordini = [];
        this.ordine = new Ordine();
    }

    save(ordine:Ordine) {
        this.ordini.push(ordine);
        this.ordine = new Ordine();
    }


    incrProdotto(id:number) {
        for (var num in this.ordine.prodotti) {
            var ordineProd = this.ordine.prodotti[num];
            if (ordineProd.prodotto.id == id) {
                ordineProd.incr();
                //this.ordine.prodotti.pop();
                //this.ordine.prodotti.push(ordineProd);
                console.log('incrProdotto di: ' + JSON.stringify(ordineProd));
                break;
            }
        }
    }

    decrProdotto(id:number) {
        for (var num in this.ordine.prodotti) {
            var ordineProd = this.ordine.prodotti[num];
            if (ordineProd.prodotto.id == id) {
                ordineProd.decr();
                //this.ordine.prodotti.pop();
                //this.ordine.prodotti.push(ordineProd);
                console.log('decrProdotto di: ' + JSON.stringify(ordineProd));
                break;
            }
        }
    }

    addProdotto(prodotto:Prodotto) {
        var trovato = false;
        for (var num in this.ordine.prodotti) {
            var ordineProd = this.ordine.prodotti[num];
            if (ordineProd.prodotto.id == prodotto.id) {
                ordineProd.incr();
                trovato = true;
                console.log('aumento qta di: ' + JSON.stringify(ordineProd));
                break;
            }
        }
        if (!trovato) {
            var prodottoOrdineNew:ProdottoOrdine = new ProdottoOrdine(prodotto);
            this.ordine.prodotti.push(prodottoOrdineNew);
            console.log('size: ' + this.ordine.prodotti.length);
        }
    }

    delProdotto(id:number) {
        for (var num in this.ordine.prodotti) {
            var ordineProd = this.ordine.prodotti[num];
            if (ordineProd.prodotto.id == id) {
                this.ordine.prodotti.splice(num, 1);
                console.log('elimino : ' + JSON.stringify(ordineProd));
                break;
            }
        }
    }


    reset() {
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
