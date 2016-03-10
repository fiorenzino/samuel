export class Prodotto {
    id:string;
    title:string;
    category:string;
    img:string;
    description:string;
    color:string;
    price:number;

    constructor(id:string,
                category:string,
                title:string,
                img:string,
                description:string,
                color:string,
                price:number) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.img = img;
        this.description = description;
        this.color = color;
        this.price = price;
    }
}