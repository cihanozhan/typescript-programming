/*
    Constructors

    http://cihanozhan.com
*/

// v1
class Car {

    // fields
    brand:string;
    model:string;
    color:string;

    // v1
    constructor(){
        // we can do something here
    }

    // v2
    constructor(){
        this.brand = "Unknown";
    }

    // v3
    constructor(brand:string, model:string, color:string) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    // v4
    constructor(brand:string, model:string, color?:string) {    // color?: string   // color is a optional parameter
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    // v5
    constructor(brand:string, model?:string, color?:string) {   // two optional parameters
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    // v6
    
        // fields

        // brand: string;   // this code line is not required if we use 'private' into constructors 
        // model: string;   // this code line is not required if we use 'private' into constructors 
        // color: string;   // this code line is not required if we use 'private' into constructors

    constructor(brand:string, private model:string, private color:string) {
        // Eğer brand'ın private belirleyicisini public yaparsam nesne örneği üzerinden erişilebilir.
        
        // this.model = model;          // this code line is not required if we use 'private' into constructors
        // this.color = color;          // this code line is not required if we use 'private' into constructors
    }

    Run() : void {
        console.log("Running...");
    }

    Stop() : void {
        console.log("Stopped!");
    }
}

let car:Car = new Car();                        // Empty constructor
let car:Car = new Car("Anadol","XYZ","Krem");   // Full used constructors
let car:Car = new Car("Anadol","X");            // The last one was a optional parameter.

car.Run();
car.Stop();

//  -----------------------------------------


class Uzayli {
    constructor(private arac:string) {  
        this.arac = "adada"
    }
}

let ufo1 = new Uzayli("USS-1")



//  -----------------------------------------


// v2
class User {
    constructor(public name: string, public surname: string) {

    }

    WriteUser() {
        console.log(this.name + " " + this.surname)
    }
}

let newUser = new User("Cihan", "Özhan");

newUser.name = "Ahmet";
newUser.surname = "Mehmetoğlu";

newUser.WriteUser();