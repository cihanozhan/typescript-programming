/*
    Module App

    http://cihanozhan.com
*/

export interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}