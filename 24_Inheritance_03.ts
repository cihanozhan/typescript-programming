/*
    Inheritance

    http://cihanozhan.com
*/

// Kalıtımda Constructor Kullanımı

class User {
    constructor(public name: string, public surname: string) {

    }

    WriteUser() {
        console.log(this.name + " " + this.surname)
    }
}

class reportUser extends User {
    constructor(public name: string, public surname: string) {
        super(name, surname)
    }
}

let newReportUser = new reportUser("Erkan", "Kilmen");
newReportUser.WriteUser();