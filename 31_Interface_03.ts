/*
    Interface

    http://cihanozhan.com
*/

class Customer
{
    name:string;
    surname:string;
}

interface CustomerBank extends Customer
{
    iban:string
}

let newCustomer:CustomerBank={name:"Erkan",surname:"Kilmen",iban:"12345678"};

console.log(newCustomer);

function deneme(ad:string,...diger:string[])
{
    console.log(ad+" "+diger.join(" "));
}