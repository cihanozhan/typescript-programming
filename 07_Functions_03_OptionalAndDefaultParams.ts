/*
    Functions

    http://cihanozhan.com
*/

// DEFAULT PARAMETER
function topla5(x:number, y:number=5):number {
    return x+y;
}

// OPTIONAL PARAMETER
function topla6(x:number, y?:number):number {
    if(y){  // y değeri b
        return x+y;
    }
    return x;
}

let res:number = topla6(5);
console.log(res);

res = topla6(7);
console.log(res);