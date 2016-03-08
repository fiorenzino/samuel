import {Page} from 'ionic-angular';
import {Prodotti} from '../prodotti/prodotti';
import {Ordini} from '../ordini/ordini';
import {Home} from '../home/home';
import {Clienti} from '../clienti/clienti';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = Clienti;
  tab3Root: any = Prodotti;
  tab4Root: any = Ordini;
}
