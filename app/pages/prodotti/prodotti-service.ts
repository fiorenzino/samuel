import {Prodotto} from './prodotto';

export class ProdottiService {

    prodotti:Prodotto[];

    constructor() {
        console.log('prodotti service init');
        this.prodotti = [
            new Prodotto(
                'Angular',
                'angular',
                'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                '#E63135'
            ),
            new Prodotto('CSS3',
                'css3',
                'The latest version of cascading stylesheets - the styling language of the web!',
                '#0CA9EA'
            ),
            new Prodotto('HTML5',
                'html5',
                'The latest version of the web\'s markup language.',
                '#F46529'
            ),
            new Prodotto('JavaScript',
                'javascript',
                'One of the most popular programming languages on the Web!',
                '#FFD439'
            ),
            new Prodotto('Sass',
                'sass',
                'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                '#CE6296'
            ),
            new Prodotto('NodeJS',
                'nodejs',
                'An open-source, cross-platform runtime environment for developing server-side Web applications.',
                '#78BD43'
            ),
            new Prodotto('Python',
                'python',
                'A clear and powerful object-oriented programming language!',
                '#3575AC'
            ),
            new Prodotto('Markdown',
                'markdown',
                'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
                '#412159'
            ),
            new Prodotto('Tux',
                'tux',
                'The official mascot of the Linux kernel!',
                '#000'
            )
        ]
    }
}