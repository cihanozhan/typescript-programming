/*
    Class

    http://cihanozhan.com
*/

// v1
class Car {

    // fields
    brand:string;
    model:string;
    color:string;

    Run():void {
        console.log("Running...");
    }

    Stop():void {
        console.log("Stopped!");
    }
}

let car:Car = new Car();

// SET DATA
car.brand = "Anadol";
car.color = "Krem";

// CALL FUNCTIONS
car.Run();
car.Stop();