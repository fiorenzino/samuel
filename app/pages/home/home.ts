import {Page, NavController} from 'ionic-angular';
import {OrdiniList} from '../ordini/ordini-list';
import {ProdottiList} from '../prodotti/prodotti-list';
import {ClientiList} from '../clienti/clienti-list';


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
        this.ordini = OrdiniList;
        this.prodotti = ProdottiList;
        this.clienti = ClientiList;
        this.pages = [
            {title: 'Clienti', component: ClientiList, icon: "people"},
            {title: 'Prodotti', component: ProdottiList, icon: "list"},
            {title: 'Ordini', component: OrdiniList, icon: "clipboard"}
        ];
        this.pushPage = OrdiniList;
    }

    gotoClienti() {
        this.nav.setRoot(ClientiList);
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }


}
