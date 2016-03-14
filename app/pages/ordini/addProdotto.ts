import {Component} from 'angular2/core';
import {Inject} from "angular2/core";
import {OrdiniService} from "../../services/ordini-service";
import {Prodotto} from "../../model/prodotto";
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {NavController} from "ionic-angular/index";
import {OrdineEdit} from "./ordine-edit";
import {IonicApp} from "ionic-angular/index";
import {Injectable} from "angular2/core";

@Component({
        selector: 'add-prodotto',
        template: `
            <button block (click)="add(prodotto)">
                aggiungi
                <ion-icon name="add-circle"></ion-icon>
            </button>
    `,
        directives: [IONIC_DIRECTIVES],
        inputs: ['prodotto']
    }
)
@Injectable()
export class AddProdotto {

    ordiniService:OrdiniService;

    constructor(public app:IonicApp, @Inject(OrdiniService) ordiniService) {
        console.log('creo addProdotto')
        this.ordiniService = ordiniService;
    }

    add(prodotto:Prodotto) {
        console.log('add prodotto: ' + JSON.stringify(prodotto));
        this.ordiniService.addProdotto(prodotto);
    }
}