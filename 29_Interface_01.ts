/*
    Interface

    http://cihanozhan.com
*/

// v1
interface IProduct {
    id:number;
    name:string;
    unitPrice:number;
}

class Book implements IProduct {
    id:number;
    name:string;
    unitPrice:number;
    pageCount:number;
    size:number;
}

class Electronic implements IProduct {
    id:number;
    name:string;
    unitPrice:number;
    // ...
}

function Save(product:IProduct) {
    console.log(product.name + " kaydedildi.");
}

// Interface Test
Save({id:3, name:"iPhone", unitPrice:3240});

let book = new Book();



















// --------------------------------------

// CLASS VERSION OF THIS

class Product {
    id:number;
    name:string;
    unitPrice:number;
}

function SaveClass(product:Product) {
    console.log(product.name + " kaydedildi.");
}

// Class Test
let prd = new Product();
prd.name = "Tilifon";

SaveClass(prd);











// v2
interface personType{
    name:string,
    surname:string,
    age:number
}

function persondetail(prs:personType)
{
    console.log(prs.name+" "+prs.surname+"\r\n"+prs.age);
}

persondetail({name:"Erkan",surname:"Kilmen",age:37});



// v3   : Zorunlu Alan Kullanımı
interface userType{
    username:string,
    userpass:string,
    authType?:number
}

function userDetail(usr:userType)
{
    console.log(usr.username+" - "+usr.userpass+(usr.authType!=undefined?" - "+usr.authType:""));
}

userDetail({username:"ekilmen",userpass:"123"});

userDetail({username:"ays",userpass:"111",authType:3});



// v4   : Sadece Okunabilir Alan Kullanımı
interface AuthType{
    // properties tanımlarında const yerine readonly kullanabiliriz
    readonly authname:string
}

let auth:AuthType={authname:"Admin"};

console.log(auth.authname);