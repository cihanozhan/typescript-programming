/*
    Class

    http://cihanozhan.com
*/


// FIRST PART

class Person
{
    private firstName: string
    private lastName: string
    private dateOfBirth: Date
    // private isActive:boolean

    constructor(firstName:string, lastName:string, dateOfBirth:Date) 
    {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
    }

    public get FirstName():string {
        return this.firstName
    }

    public set FirstName(firstName:string) {
        if(firstName.length >= 3){
            this.firstName = firstName
        } 
        else {
            new Error("Bu da hata!")
        }
    }

    /*
    
        public GetFirstName():string {
            return this.FirstName
        }

        public SetFirstName(firstName:string):void {
            if(firstName.length >= 3){
                this.FirstName = firstName
            } 
            else {
                new Error("Bu da hata!")
            }
        }
    
    */

    Show():string
    {
        return (`${this.FirstName} ${this.lastName} ${this.dateOfBirth}`)
    }
}

let p:Person = new Person("Cihan","Özhan", new Date(10,10,2010))
// GETTER/SETTER METHODS
// console.log(p.GetFirstName())
// p.SetFirstName("Mirkelam")
// console.log(p.GetFirstName())
// -----------

p.FirstName = "Hakkı";
console.log(p.FirstName);

// p.FirstName = "Cihan"
// p.LastName = "Özhan"
// p.DateOfBirth = new Date(1988, 01, 02);
p.Show();

// OR
let p2:Person = new Person("Cihan","Özhan", new Date(1988, 01, 02))
p2.Show()








//  --------------------------------------------------------



// SECOND PART

// NEW CLASS AND EXTENDS

class Employee extends Person {
    DepartmentName: string;
    Salary: number;
    constructor(firstName:string, lastName:string, dateOfBirth:Date, departmentName:string, salary:number) {
        super(firstName,lastName,dateOfBirth)
        this.DepartmentName = departmentName;
        this.Salary = salary;
    }

    Show() {
        let x:string = super.Show()
        x += `${this.DepartmentName} ${this.Salary}`
        return x;
    }
}

// v1
let emp1:Person = new Employee("Cihan","Özhan", new Date(1988, 01, 02))
emp1.Show()

// v2
let emp1:Person = new Employee("Cihan","Özhan", new Date(1988, 01, 02), "IT Manager", 14000)
emp1.Show()