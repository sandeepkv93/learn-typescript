class Person {
    // Multiple Constructors are not allowed
    // Method overloading is also not allowed
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
var aPerson = new Person('Sandeep', 'Vishnu');
console.log(aPerson.getFullName());
