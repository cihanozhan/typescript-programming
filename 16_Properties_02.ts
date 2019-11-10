/*
    Properties

    http://cihanozhan.com
*/

class Educator {
    private _name: string;
    private _surname: string;

    set name(newName: string) {
        this._name = newName;
    }

    set surname(newSurname: string) {
        this._surname = newSurname;
    }

    get FullName(): string {
        return this._name + " " + this._surname.toUpperCase();
    }
}

let newEducator = new Educator();

newEducator.name = "Cihan";
newEducator.surname = "Özhan";

console.log(newEducator.FullName);

//Accessors are only available when targeting ECMAScript 5 and higher hatası aldığımızda 
//tsc --target es5 script.ts ile çözebiliriz