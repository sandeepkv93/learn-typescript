class Person {
    firstName : string;
    lastName : string;
    // Multiple Constructors are not allowed
    // Method overloading is also not allowed
    constructor(first : string, last : string) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName() : string {
        return this.firstName +' '+ this.lastName;
    }
}

var aPerson: Person = new Person('Sandeep','Vishnu');
console.log(aPerson.getFullName());

