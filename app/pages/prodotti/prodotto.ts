export class Prodotto {
    title:string;
    icon:string;
    description:string;
    color:string;

    constructor(title:string,
                icon:string,
                description:string,
                color:string) {
        this.title = title;
        this.icon = icon;
        this.description = description;
        this.color = color;
    }
}