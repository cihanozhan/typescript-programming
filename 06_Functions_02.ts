/*
    Functions

    http://cihanozhan.com
*/

// v1
function getAverage(a:number, b:number, c:number): string {    
    const result = (a + b + c) / 3;
    return 'result : ' + result;
}

getAverage(20,30,50);
getAverage(40,50);


// v2 
function getAverage(a:number, b:number, c:number): string {    
    let total = a + b;
    let count = 2;

    if (typeof c !== 'undefined') {
        total +=c;
        count++;
    }

    const result = total/count;
    return 'result : ' + result;
}


// v3
function getAverage(...a: number[]): string {    
    let total = 0;
    let count = 0;

    if (let i=0; i<a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total/count;
    return 'result : ' + result;
}


// v4
function getAverage(x:string, ...a: number[]): string {    
    let total = 0;
    let count = 0;

    if (let i=0; i<a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total/count;
    return 'result : ' + result;
}