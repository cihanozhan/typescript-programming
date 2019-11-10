/*
    Properties

    http://cihanozhan.com
*/

class Car {

    // Fields
    brand:string;
        // private brand:string;
        // public brand:string;     // default access modifier is public
    model:string;
    color:string;

    // --------> GET/SET METHODS

    getBrand() {
        return this.brand;
    }
    
    setBrand(value: string) {
        if(value.length == 0) {
            throw new Error('Error!');
        }
        this.model = value;
    }
    
    // --------> PROPERTIES
    
    get Brand() {
        return this.brand;
    }
    
    set Brand(value: string) {
        if(value.length == 0) {
            throw new Error('Error!');
        }
        this.brand = value;
    }
}

let car:Car = new Car();

// SET DATA
car.brand = "Anadol";
car.color = "Krem";

// OUTPUT
console.log(car.brand + " / " + car.model);

//Accessors are only available when targeting ECMAScript 5 and higher hatası aldığımızda 
//tsc --target es5 script.ts ile çözebiliriz