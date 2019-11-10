/*
    Functions

    https://www.tutorialsteacher.com/typescript/rest-parameters

    http://cihanozhan.com
*/


function Greet(greeting: string, ...names:string[]) {
    return greeting + " " + names.join(", ") + "!";
}

let res:string = Greet("Hi","Cihan","Ali","Veli");

console.log(res);

res = Greet("Hi");

console.log(res);