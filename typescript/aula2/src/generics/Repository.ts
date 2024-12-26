import Entity, * as x from "./Entity";

export class Repository<T extends Entity> {
    list: T[];

    constructor() {
        console.log(x);
        this.list = [];
    }

    add(el: T) {
        this.list.push(el);
    }
}
