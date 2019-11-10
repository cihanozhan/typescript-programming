/*
    Generic Classes

    http://cihanozhan.com
*/

// v1
class XClass<T> {
    obj:T;

    func(param:T):T{
        return param;
    }
}

let x = new XClass<string>();
let res = x.func("Deneme");
x.obj = "Cihan!";

console.log(res);
console.log(x.obj);

let xnum = new XClass<number>();
xnum.obj = 43;

















// v2
class MyGeneric<T>{
    type:T;
}

let numberuse=new MyGeneric<number>();
let stringuse=new MyGeneric<string>();

numberuse.type=123;
stringuse.type="Erkan Kilmen";