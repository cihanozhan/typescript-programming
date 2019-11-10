/*
    Inheritance

    http://cihanozhan.com
*/

class User {
    // xType:string;
    // private xType:string;
    // protected xType:string;

    ID:number
    FirstName:string
    LastName:string
    Email:string
    Username:string
    Password:string
    IsActive:boolean

    Save() {
        console.log("User saved.");
    }
}

class Customer extends User {
    Sell() {
        console.log("Satış yapıldı.");
        // this.xType = "test";
    }
}

class Personnel extends User {
    PaySalary() {
        console.log("Maaş ödendi.");
    }
}

// Example 1
let customer = new Customer();
customer.Save();
customer.Sell();

// Example 2
let personnel = new Personnel();
personnel.Save();
personnel.PaySalary();