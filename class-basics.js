var Person = /** @class */ (function () {
    // Multiple Constructors are not allowed
    // Method overloading is also not allowed
    function Person(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var aPerson = new Person('Sandeep', 'Vishnu');
console.log(aPerson.getFullName());
