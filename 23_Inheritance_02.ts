/*
    Inheritance

    http://cihanozhan.com
*/

enum titleType {
    Junior = "Junior",
    Senior = "Senior",
    Master = "Master",
}

class Person {
    name: string;
    surname: string;

    WritePerson() {
        console.log(this.name + " " + this.surname);
    }
}

class Coder extends Person {
    title: titleType

    CoderDetails() {
        console.log(this.name + " " + this.surname + " - " + this.title.toString());
    }
}

let personCoder = new Coder();

personCoder.name = "Ali";
personCoder.surname = "Veli";
personCoder.title = titleType.Senior;

personCoder.CoderDetails();