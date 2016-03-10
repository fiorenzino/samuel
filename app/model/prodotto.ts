export class Prodotto {
    id:string;
    title:string;
    icon:string;
    description:string;
    color:string;
    price:number;

    constructor(id:string,
                title:string,
                icon:string,
                description:string,
                color:string,
    price:number) {
        this.id=id;
        this.title = title;
        this.icon = icon;
        this.description = description;
        this.color = color;
        this.price=price;
    }
}