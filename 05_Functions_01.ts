/*
    Functions

    http://cihanozhan.com
*/

// JavaScript function example
function topla1(x,y) {   // unknown datatypes
    return x + y;
}

// TypeScript function example
function topla2(x:number, y:number):number {
    return x+y;
}

topla1(2,3);    // "any" type
topla2(4,6);    // "number" type

let topla3 = function(x:number, y:number):number {
    return x+y;
}

console.log(topla1(2,2));
console.log(topla1("X",5));
console.log(topla2(2,5));
console.log(topla3(4,5));


//  -------------------------------------


//void tipindeki metodlar içeriğinde yapılan işlem sonucu herhangi bir değer döndürülmez
function KareAl(sayi: number): void {
    console.log(sayi * sayi);
}


//void harici tip tanımı yaptığımız metodlarda metodun son satırında belirtilen tipte bir 
//veri döndürmemiz gerekmektedir
function BuyukHarf(veri: string): string {
    return veri.toUpperCase();
}

function BolumdenKalan(bolunen: number, bolen: number): number {
    return bolunen % bolen;
}

//never tip tanımı bir verinin dönmeyeceği durumlar için kullanılmaktadır
function hata(mesaj: string): never {
    throw new Error(mesaj);
}

function Topla(sayi1: any, sayi2: any) {

    if (typeof (sayi1) === "number" && typeof (sayi2) === "number") {
        return sayi1+sayi2;
    }

    return hata("Hatalı Sayı Değeri - Sayı olmayan veri girişi");
}

//  --------- ADD FUNCTIONS

function Add1(a:number, b:number, c?:number){
    if(!c)
        c = 0;
    return a + b + c;
}

function Add2(a:number, b:number, c:number = 0){
    return a + b + c;
}