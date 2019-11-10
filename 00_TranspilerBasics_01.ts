/*
    Transpiler Basics

    http://cihanozhan.com
*/

// v1
console.log('Merhaba Dünya');
console.log("Cihan Özhan");
console.log("Merhaba Mars");

let metinsel:string;
metinsel = "Cihan Özhan";
console.log(metinsel);
metinsel = 12345;
console.log(metinsel);

// v2
function greeter(name) {
    console.log('Hello ' + name);
}

let user = 'Mars';

greeter(user);