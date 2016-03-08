import {Page} from 'ionic-angular';
import {ProdottiList} from '../prodotti/prodotti-list';
import {OrdiniList} from '../ordini/ordini-list';
import {Home} from '../home/home';
import {ClientiList} from '../clienti/clienti-list';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = ClientiList;
  tab3Root: any = ProdottiList;
  tab4Root: any = OrdiniList;
}
