/*
    Module App

    http://cihanozhan.com
*/

import { Point } from './Point';
import { Vehicle } from './Vehicle';

class Taxi implements Vehicle {
    
    // color: string;   // this code line is not required if we use 'private' into constructors 
    // color: string;   // this code line is not required if we use 'private' into constructors

    // constructor(private _location: Point, private _color: string)    // to use this for using property style
    constructor(private location: Point, private color: string) {
        // Eğer location'ın private belirleyicisini public yaparsam nesne örneği üzerinden erişilebilir.
        
        // this.currentLocation = location; // this code line is not required if we use 'private' into constructors
        // this.color = color;              // this code line is not required if we use 'private' into constructors
    }

    currentLocation: Point;
    travelTo(point: Point): void {
        // v1
        console.log('taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.');
        // v2
        console.log('taksi X: ${this.location.x} Y: ${this.location.point.y} konumuna gidiyor.');
    }

    // GET-SET METHODS -> START
    getLocation() {
        return this.location;
    }

    setLocation(value: Point) {
        if(value.x < 0 || value.y) {
            throw new Error('Hataa!');
        }
        this.location = value;
    }
    // GET-SET METHODS -> END

    // PROPERTY -> START
    get Location() {
        return this.location;
    }

    set Location(value: Point) {
        if(value.x < 0 || value.y) {
            throw new Error('Hataa!');
        }
        this.location = value;
    }
    // PROPERTY -> END
}

class Bus implements Vehicle {
    // ...  sadece bus'a özel olan özellikler
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log('Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.');
    }
}


//  -----------------------------------------


let taxi1: Taxi = new Taxi({ x:3, y:5 });
taxi1.travelTo({x:12, y:76});

// USING AS GET-SET METHODS
let currentLocation = taxi1.getLocation();
taxi1.setLocation({ x:5, y:8});

// USING AS PROPERTY
let currentLocation = taxi1.Location;
taxi1.Location { x:5, y:8};