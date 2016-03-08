var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var cliente_view_1 = require('../clienti/cliente-view');
var cliente_new_1 = require('../clienti/cliente-new');
var ClientiList = (function () {
    function ClientiList(nav) {
        this.nav = nav;
        this.clienti = [];
        this.clienti = [
            {
                'name': 'Ict Group',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Manutencoop',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'HTML5',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'JavaScript',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Sass',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'NodeJS',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Python',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Markdown',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
            {
                'name': 'Tux',
                'location': 'Reggio Emilia',
                'piva': '12345678',
                'color': '#E63135'
            },
        ];
    }
    ClientiList.prototype.openNavDetailsPage = function (cliente) {
        this.nav.push(cliente_view_1.ClienteView, { cliente: cliente });
    };
    ClientiList.prototype.goToNewCliente = function () {
        this.nav.push(cliente_new_1.ClienteNew);
    };
    ClientiList = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/clienti/clienti-list.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], ClientiList);
    return ClientiList;
})();
exports.ClientiList = ClientiList;
