import {Ordine} from './../model/ordine';
export class OrdiniService {
    ordini = [];

    constructor() {
        this.ordini = [];
    }

    add(ordine:Ordine) {
        this.ordini.push(ordine);
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