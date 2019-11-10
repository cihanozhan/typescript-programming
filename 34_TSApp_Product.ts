/*
    A TypeScript Application Example

    http://cihanozhan.com
*/

/*
    class Product {
       id: number;
        name: string;

        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
*/

export class Product {
    constructor(
            public id?: number, 
            public name?: string,
            public category?: string,
            public price?: number
        ) { }
}

// let prod: Product = new Product();
