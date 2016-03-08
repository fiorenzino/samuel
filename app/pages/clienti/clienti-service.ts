import {Cliente} from './cliente';

export class ClientiService {

    clienti:Cliente[];

    constructor() {
        console.log("clienti init");
        this.clienti = [
            new Cliente('Ict Group','000000','Reggio Emilia'),
            new Cliente('Manutencoop','999999','Imola'),
        ]
   }
}