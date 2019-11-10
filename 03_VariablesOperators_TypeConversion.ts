/*
    Type Conversion

    http://cihanozhan.com
*/


//
let number: number = 42;
let numberAsString: string = String(number);
console.log(typeof number);
console.log(typeof numberAsString);
    // OUTPUT
    // number
    // string


// 
let stringAsNumber: string = "42";
let number: number = Number(stringAsNumber);
console.log(typeof stringAsNumber);
console.log(typeof number);



// v1
function topla(sayi1:string,sayi2:string):number {
    return Number(sayi1)+Number(sayi2);
}
console.log(topla("8","5"));



// v2
let x1:any = 10
let y1:string = <string>x1
alert(y1)

let x2:any = null
let y2:string = x2 as string

// 
let x3:any = "A"            // untyped defination but string
let y3:number = <number>x3  // we converted type of x3 to number
y3 = x3 as number           // we converted type of x3 to number
alert("y3 = " + y3)
