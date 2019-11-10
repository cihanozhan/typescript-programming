/*
    Operators

    http://cihanozhan.com
*/

/**
 * LET Operatörü
 *  */


    //let değişken tanımlama amaçlı kullanılmaktadır

    let degisken:string;

    //degiskenler tanımlama yapılırken ilk değer atanabilir

    let degisken2:string="İlk Değer";

    //daha sonrasında bu değeri aynı tipte olmak koşulu ile istediğimizde değiştirebiliriz

    degisken2="Son Değer";


/**
 * CONST Operatörü
 *  */


    //const da let gibi değişken tanımlama amaçlı kullanılmaktadır

    //1- const ile değişken tanımlama anında ilk değer verilmelidir
    const sabit:string="ilk değer";

    //const ile yapılmış tanımlamalarda içerik değiştirilemez
    //sabit="son değer";

    //obje tanımlamalarında
    const obje={
        deger1:"veri 1",
        deger2:"veri 2"
    }


    //obje yapısı değiştirilemez
    /*obje={
        yenideger:"yeni veri"
    }*/

    //ancak içeriğinde bulunan veriler değiştirilebilir

    obje.deger1="yeni veri 1";
    obje.deger2="yeni veri 2";


/**
 * SPREAD Operatörü
 *  */


    //spread operatörü bir listeye ait eleman içeriklerini geriye döndürür

    let bas=[2,3,4];
    let son=[7,8,9];
    let tumu=[0,1,...bas,5,6,...son];

    console.log(tumu);