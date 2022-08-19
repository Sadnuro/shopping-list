export class Item {
    id          : number;
    title       : string;
    price       : number;
    quantity    : number;
    completed   : boolean;

    constructor(){
        this.id         = 0;
        this.title      = '';
        this.price      = 0;
        this.quantity   = 0;
        this.completed  = false;
    }
}