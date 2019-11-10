/*
    A TypeScript Application Example

    http://cihanozhan.com
*/

import { IProductService } from "./IProductService";
import { Product } from './Product';
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {

    // SimpleDataSource oluşturulduktan sonra burası yazıldı.
    private dataSource: SimpleDataSource;
    private products: Array<Product>;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }
    // --->

    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0];   // tek bir kayt almak istediğimiz için [0] dedik.
    }
    
    getProducts(): Product[] {
        return this.products;
    }

    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null) {
            product.id = this.generateId(); // yeni ID üret ve ekle.
            this.products.push(product);
        } else {
            let index;
            
            for(let i=0; i<this.products.length; i++){
                if(this.products[i].id === product.id) {
                    index = i;
                }
            }

            this.products.splice(index, 1, product);    // index'ten sonra gelen ilk elemanın yerine product'ı ekle.
        }
    }

    deleteProduct(product: Product): void {
        // Silinmek için gelen ürünün liste içerisindeki index no'sunu al.
        let index = this.products.indexOf(product);
        if(index > 0) {
            // verilen index'ten itibaren bir elemanı/ürünü sil.
            this.products.splice(index, 1);
        }
    }

    private generateId(): number {
        let key = 1;
        while(this.getById(key) != null) {
            key++;
        }
        return key;
    }
}