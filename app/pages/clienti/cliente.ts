export class Cliente {

    name:string;
    piva:string;
    location:string;

    constructor(name:string,
                piva:string,
                location:string) {
        this.name = name;
        this.piva = piva;
        this.location = location;
    }
}