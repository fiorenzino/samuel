import {Page, NavController} from 'ionic-angular';
import {ProdottiList} from '../prodotti/prodotti-list';
import {OrdiniList} from '../ordini/ordini-list';
import {Home} from '../home/home';
import {ClientiList} from '../clienti/clienti-list';
import {SecurityService} from "../../services/security-service";
import {Inject, OnInit} from "angular2/core";
import {Login} from '../login/login';



@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage implements OnInit {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = ClientiList;
  tab3Root: any = ProdottiList;
  tab4Root: any = OrdiniList;

    constructor(public nav: NavController, @Inject(SecurityService) public securityService) {
    }

    ngOnInit() {
        console.log(this.securityService.isLogged());
        if (!this.securityService.isLogged()) {
            //this.nav.push(Login);
            this.nav.setRoot(Login);
            this.nav.popToRoot();
        }

    }

}
