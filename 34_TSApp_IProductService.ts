/*
    A TypeScript Application Example

    http://cihanozhan.com
*/

import { Product } from "./Product";

export interface IProductService {
    getById(id: number): Product;
    getProducts(): Array<Product>;
    // getProducts(): Product[];        // ALTERNATIVE
    saveProduct(product: Product): void;
    deleteProduct(product: Product): void;
}