/*
    Static Class

    http://cihanozhan.com
*/

class MathObj {
    static numbers = { number1: 0, number2: 0 };

    returnTotal() {
        console.log(MathObj.numbers.number1 + MathObj.numbers.number2);
    }
}

let total = new MathObj();

MathObj.numbers = { number1: 5, number2: 10 };

total.returnTotal();