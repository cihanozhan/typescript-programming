/*
    REGULAR FUNCTION EXAMPLES

    http://cihanozhan.com
*/

function Fonk1(x: number):number {
    return x;
}

function Fonk2(x: string):string {
    return x;
}

let res1 = Fonk1(10);
console.log(res1);

let res2 = Fonk2("X");
console.log(res2);


// GENERIC VERSION OF THIS

function Fonk3<T>(x:T):T {
    return x;
}

let res3 = Fonk3<number>(98);
console.log(res3);

let res4 = Fonk3<string>("XXX");
console.log(res4);