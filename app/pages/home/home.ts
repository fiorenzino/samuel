import {Page, NavController} from 'ionic-angular';
import {Ordini} from '../ordini/ordini';
import {Prodotti} from '../prodotti/prodotti';
import {Clienti} from '../clienti/clienti';


@Page({
    templateUrl: 'build/pages/home/home.html',
})
export class Home {

    prodotti:any;
    ordini:any;
    clienti:any;
    pages = [];
    pushPage;

    constructor(public nav:NavController) {
        this.ordini = Ordini;
        this.prodotti = Prodotti;
        this.clienti = Clienti;
        this.pages = [
            {title: 'Clienti', component: Clienti, icon: "people"},
            {title: 'Prodotti', component: Prodotti, icon: "list"},
            {title: 'Ordini', component: Ordini, icon: "clipboard"}
        ];
        this.pushPage = Ordini;
    }

    gotoClienti() {
        this.nav.setRoot(Clienti);
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }


}
