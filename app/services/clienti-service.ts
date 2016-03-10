import {Cliente} from './../model/cliente';

export class ClientiService {

    clienti:Cliente[];

    constructor() {
        //id:string,
        //    name:string,
        //    province:string,
        //    location:string,
        //    city:string,
        //piva:string
        console.log("clienti init");
        this.clienti = [
            new Cliente('123', 'Ict Group', 'RE', 'via lame 33', 'Reggio Emilia', '1234567890'),
            new Cliente('124', 'I.B.M. Co.', 'MI', 'via del lavoro 24', 'Sesto San Giovanni', '9876543210'),
            new Cliente('125', 'Microsoft', 'RM', 'via foglia 12', 'Pomezia Terme', '12312345670'),
            new Cliente('123', 'Oracle Inc.', 'MI', 'via del tricolore 55', 'Milano', '12312345670'),
        ]
    }
}