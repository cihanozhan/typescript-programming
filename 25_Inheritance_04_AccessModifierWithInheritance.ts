/*
    Inheritance

    http://cihanozhan.com
*/

class Erisim {
    public HeryerdenUlas(): void {

    }

    protected KalitimdaUlas(): void {

    }

    private ClassaOzel(): void {

    }

    private testErisim() {
        this.HeryerdenUlas();
        this.KalitimdaUlas();
        this.ClassaOzel();
    }
}

class Kalitim extends Erisim {
    private KalitimErisim() {
        this.HeryerdenUlas();
        this.KalitimdaUlas();
        //  this.ClassaOzel(); => Erişim Hatası
    }
}

let testObje = new Kalitim();
testObje.HeryerdenUlas();