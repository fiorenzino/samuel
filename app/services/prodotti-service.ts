import {Prodotto} from './../model/prodotto';

export class ProdottiService {

    prodotti:Prodotto[];

    //id:string,
    //category:string,
    //title:string,
    //img:string,
    //description:string,
    //color:string,
    //price:number

    constructor() {
        console.log('prodotti service init');
        this.prodotti = [
            new Prodotto(
                '123',
                'desktop',
                'Desktop Special',
                'desktop.jpg',
                'Potente antivirus, libera il tuo pc con Windows/Mac/Linux da ogni virus.',
                '#E63135',
                123.00
            ),
            new Prodotto(
                '124',
                'mouse',
                'Mouse Liberty',
                'mouse.jpg',
                'Cuffie bletooth per ogni tipo di pc. Supporto anche per Skype..',
                '#E63135',
                123.00
            ),
            new Prodotto(
                '124',
                'notebook',
                'Acer Notebbok',
                'notebook.jpg',
                'Cuffie bletooth per ogni tipo di pc. Supporto anche per Skype..',
                '#E63135',
                123.00
            )

        ]
    }

    getCategorie():string[] {
        var list:string[] = [];
        for (var prodotto in this.prodotti) {
            if (!list.indexOf(prodotto.category)) {
                list.push(prodotto.category);
            }
        }
        return list;
    }
}