export class Cliente {

    id:string;
    name:string;
    province:string;
    location:string;
    city:string;
    piva:string;

    constructor(id:string,
                name:string,
                province:string,
                location:string,
                city:string,
                piva:string) {
        this.id = id;
        this.name = name;
        this.province=province;
        this.city=city;
        this.piva = piva;
        this.location = location;
    }
}