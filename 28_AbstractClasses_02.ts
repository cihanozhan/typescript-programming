/*
    Abstract Classes

    http://cihanozhan.com
*/

abstract class Mathematical {
    constructor(public number1: number, public number2: number) {

    }

    abstract operation(): number;
}

class Addition extends Mathematical {

    constructor(public number1: number, public number2: number) {
        super(number1, number2);
    }

    operation(): number {
        return this.number1 + this.number2;
    }

}
let add=new Addition(10,4);

console.log(add.operation());