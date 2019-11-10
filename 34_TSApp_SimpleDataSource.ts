/*
    A TypeScript Application Example

    http://cihanozhan.com
*/

import { Product } from "./Product";

export class SimpleDataSource {
    
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(2, "Ürün 1", "Bilgisayar", 3500),
            new Product(3, "Ürün 2", "Elektronik", 500),
            new Product(4, "Ürün 3", "Bilgisayar", 1200),
            new Product(5, "Ürün 4", "Bilgisayar", 2300),
            new Product(6, "Ürün 5", "Ev Eşyası", 300),
            new Product(7, "Ürün 6", "Otomobil", 5000)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}