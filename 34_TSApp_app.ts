/*
    A TypeScript Application Example

    http://cihanozhan.com
*/

import { ProductService } from "./ProductService";
import { Product } from "./Product";

let _productService = new ProductService();
let result;

result = _productService.getProducts();
result = _productService.getById(3);

console.log(result);
console.log("-----------------");

let prd1 = new Product();
prd1.name = "iPhone 6";
prd1.price = 5000;
prd1.category = "Cep Telefonu";
_productService.saveProduct(prd1);

result = _productService.getProducts();

console.log(result);
console.log("-----------------");

_productService.deleteProduct(prd1);

result = _productService.getProducts();

console.log(result);
console.log("-----------------");