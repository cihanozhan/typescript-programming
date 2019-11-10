/*
    Abstract Classes

    http://cihanozhan.com
*/

abstract class CreditBase {
    constructor() {  }

    Save():void {
        console.log("Saved.");
    }

    abstract Calculate():void;      // Abstract class.
}

class XCredit extends CreditBase {
   
    Calculate(): void {
        console.log("-> XCredit");
    }

    constructor() {
        super();
    }
}

class YCredit extends CreditBase {        // otomatik implementasyonu uygula.   
    
    Calculate(): void {
        console.log("-> YCredit");
    }
    
    constructor() {
        super();
    }
}

class ZCredit extends CreditBase {        // otomatik implementasyonu uygula.   
    
    Calculate(): void {
        console.log("-> ZCredit");
    }
    
    constructor() {
        super();
    }
}

let xCredit = new XCredit();
xCredit.Calculate();
xCredit.Save();

let yCredit = new YCredit();
yCredit.Calculate();
yCredit.Save();

let zCredit = new ZCredit();
zCredit.Calculate();
zCredit.Save();