/*
    Data Types

    	number
		string
		boolean
		enum
		void
		null
		undefined
		any
		never
		array
        tuple
        object
        
    RESOURCES

        https://www.typescriptlang.org/docs/handbook/variable-declarations.html
        
*/


/**
 * NUMBER
 *  */

    let number = 5;
    number = 'a';   // It's not correct

    let x;
    // let x: number;
    x = 5;
    x = 'x';
    x = true;

    let sayi:number
    sayi = 10
    sayi = 10.5

    let decimalValue: number = 10;
    let hexaDecimalValue: number = 0xf10b;
    let binaryValue: number = 0b110100;
    let octalValue: number = 0o410;

/**
 * STRING
 *  */

    let country : string
    country = "Turkey"
    country = "India"
    country = "Pakistan"

    let firstName: string = "Kunal";    // using double quotes
    let lastName: string = 'Chowdhury'; // using single quotes

        // When you want to span a string to multiple lines and/or have to embedded expressions (${expression}), you can use templated strings. The templated strings are surrounded by backquote/backtick (`) as shown in the below code snippets:
        
    let message: string = `Hi, my name is: ${firstName} ${lastName}`;
    let spannedMessage: string = `Hi,
    My name is: ${firstName} ${lastName}`;


    //String Değişkenlerin Veri içeriğinde kullanılması
    let urunAdi:string="A Ürünü";
    let adetFiyat:number=100;

    let detay=`Belirtilen ${urunAdi} ürününden 5 adet almak için `+(adetFiyat*5)+" TL ödedim.";
    console.log(detay);

/**
 * BOOLEAN
 *  */

    let isPrimaryAccount: boolean = true;
    let hasCards: boolean = false;

    let isValid : boolean
    // let isValid : boolean = true
    isValid = false
    isValid = true


/**
 * ENUM
 *  */

    // v1
    enum Color { Red = 1, Black, Blue }
    let color : Color = Color.Black

    // v2
    enum CardTypes { Debit, Credit, Virtual }
    let card: CardTypes = CardTypes.Debit;

    // v3
    enum CardTypes { Debit = 1, Credit, Virtual }
    enum CardTypes { Debit = 1, Credit = 3, Virtual = 5 }

    // v4
    const Credit = 1;
    const Transfer = 2;
    const EFT = 3;
    const HirePurchase = 4;

    enum Payment {Credit, Transfer, EFT, HirePurchase};

    let credit = Payment.Credit;  // 1
    let transfer = Payment.Transfer;  // 2
    let eft = Payment.EFT;  // 3
    let hirePurchase = Payment.HirePurchase;  // 4

    // v5
    enum Islemler { Toplama, Çıkarma, Bölme, Çarpma }
    let Islem: Islemler = Islemler.Toplama;
    //Sayısal değerlerine atama yapmazsak default 0 dan başlar
    console.log(Islem);

    //Enum Tanımlarında number değerine başlangıç ataması yapabiliriz
    enum Gunler { Pazartesi = 1, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar }
    let Gun:Gunler=Gunler.Perşembe;

    //İlk değer için 1 ataması yaptığımızdan dolayı 4. Elemanın sayısal değeri 4 olacaktır
    console.log(Gun);

    //Sayısal değer atamasını tüm elemanlara istediğimiz değerleri girerek verebiliriz
    enum Yetkiler{Admin=5,Personel=8,Kullanıcı=19,Rapor=9};
    let Yetki:Yetkiler=Yetkiler.Kullanıcı;

    //Kullanıcı değeri için 19 ataması yaptığımızdan dolayı sayısal değeri 19 olacaktır
    console.log(Yetki);


/**
 * VOID
 *  */

    // In general, this type of data types are used in functions that do not return any value. For example, function showMessage(): void { ... }. In TypeScript, you can also declare a variable of type void, but can only assign undefined or null to them. We will discuss about undefined and null types in the next points.

    // void : Birşey geri döndürmek istemediğimiz durumlarda void kullanılır.
    let deger : void = undefined        // string tarzı bir değer ataması yapamayız.

    function selamVer():void {
        console.log("Hi!")
        // return 1 // kullanılamaz!
    }

/**
 * NULL
 *  */

    // You can declare a variable of type null using the null keyword and can assign only null value to it. As null is a subtype of all other types, you can assign it to a number or a boolean value.

    let nullValue: null = null;
    let numericValue: number = null;

    //null (boş) değer ataması
    let bosdeger: null = null;

    //null tipi tüm tiplerin alt tipi olarak tanımlanmaktadır. 
    //Bu sayede tanımlanabilen tüm veri tiplerine null değer tipinde tanımlama yapılmış 
    //değişken atanabilir
    let sayi: number = bosdeger;
    let yazi: string = bosdeger;

    console.log(sayi);
    console.log(yazi);


/**
 * UNDEFINED
 *  */

    // You can use undefined keyword as data type to store value undefined to it. As undefined is a subtype of all other types, just like null, you can assign it to a number or a boolean value.

    let undefinedValue: undefined = undefined;
    let numericValue: number = undefined;

    // undefined & null
    let age:number; // undefined 

    //undefined (tanımsız) değer ataması
    let tanimsiz:undefined=undefined;

    //undefined tipi tüm tiplerin alt tipi olarak tanımlanmaktadır. 
    //Bu sayede tanımlanabilen tüm veri tiplerine undefined değer tipinde tanımlama yapılmış 
    //değişken atanabilir
    let durum:boolean=tanimsiz;

    console.log(durum);


/**
 * VAR
 *  */


    //var tipi
    var jsdegisken="String veri";

    jsdegisken="Cihan Özhan";

    //atanan ilk değer tipine dönüşür
    //jsdegisken=true;


/**
 * ANY
 *  */

    // While writing code you are unsure of the data type of a value, due to its dynamic content, 
    // you can use the keyword any to declare the said variable. 
    // This is often useful when you are seeking input from user or a 3rd party library/service. This is also useful when you are declaring an array which has a mixed data type. 
    // It's just like the dynamic keyword available in C#. For example,

    // v1
    // Eğer gelen verinin tipinden emin değilsek/bilmiyorsak kullanırız
    let notSure : any = "İstanbul"
    notSure = 34
    notSure = {}

    // v2
    let any1: any[] = [2, 'x', false];

    // v3
    let dynamicValue: any = "Cihan Özhan";
    dynamicValue = 100;
    dynamicValue = 0b1100101;
    dynamicValue = true;
    
    let dynamicList: any[] = [ "Cihan Özhan",
                               "Paid User",
                               31,
                               true
                             ];

    //Any tipinde tanımlanmış değişkenlere tüm tiplerde veri ataması yapabiliriz
    let herhangi: any;

    //string tipte veri ataması
    herhangi = "Bu String tipte bir değerdir";

    console.log(herhangi);

    //number tipte veri ataması
    herhangi = 123;

    console.log(herhangi);

    //bolean tipte veri ataması
    herhangi = true;

    console.log(herhangi);

    //array tipte veri ataması
    herhangi = ["Ali", "Veli", "Hasan"];

    console.log(herhangi);


/**
 * NEVER
 *  */

    // The never type represents the data type of values that never occur. 
    // For example, the following function that always throws an exception, can never return a value. 
    // Thus, the return type of the function can be set as never. 
    // Here's the function declaration:

    function throwError(message: string): never {
        throw new Error(message);
    }

    //never tipini void tipinden ayıran özelliği null veya undefined gibi alt tip 
    //tanımlarını da kabul etmemesidir
    let bosmetod: void = null;
    let bos_asla: never = null;
    let tanimsiz_asla: never = undefined;


/**
 * ARRAY
 *  */

    // Just like JavaScript, you can work with arrays in TypeScript and can define it in either of the following two ways where the second approach is the more generic way to declare arrays:

    let liste:number[]=[1,2,3,4,5];
    let marks: number[] = [80, 85, 75];
    let marks: Array<number> = [80, 85, 75];

    let numberArray1 : number[] = [1,2,3]  // ,"Ankara" // Not correct
    let numberArray2 : Array<number> = [1,2,3]

    let gunler:Array<string> = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma"];

    // ReadOnlyArray
    let arr1: number[] = [1,2,3,4,5];
    let readOnly: ReadonlyArray<number> = arr1;
    readOnly[0] = 44;   // ERROR!
    readOnly.push(66);  // ERROR!
    arr1 = readOnly;    // ERROR!
    console.log(readOnly);


/**
 * TUPLE
 *  */

    let h: [boolean, string, number] = [false, 'K', 7];     // tuple

    // correct
    let person: [string, number] = ["Kunal", 2018];

    // error
    let person: [string, number] = [2018, "Kunal"];

    // correct
    let person: [string, number] = ["Kunal", 2018, "India"];

    // correct
    let person: [string, number] = ["Kunal", 2018, 21];

    // error
    let person: [string, number] = ["Kunal", 2018, true];

    let degerler:[number,string,number];
    degerler=[1,"Erkan",200];
    console.log(degerler[1]);



/**
 * OBJECT
 * */

    //Object tip tanımı ile bir değişken içeriğine birden çok key value verisine 
    //sahip obje değeri atayabiliriz
    let kisi: object = { ad: "Cihan", soyad: "Özhan", görev: "Eğitmen" };

    console.log(kisi);

    function objedegeri(obj:object):void {
        for (let key in obj) {
            console.log(obj[key]);
        }
    }

    objedegeri({ ad: "Cihan", soyad: "Özhan", görev: "Eğitmen" });