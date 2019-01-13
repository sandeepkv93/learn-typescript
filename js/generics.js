function echo(arg) {
    return arg;
}
let myStr;
myStr = echo('Sandeep');
// myStr = echo(1); Doesn't work because Type '1' is not assignable to type 'string'
console.log(myStr);
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
class Admin extends Person {
}
class Manager extends Person {
}
let admin = new Admin('adminF', 'adminL');
let manager = new Manager('managerF', 'managerL');
function personEcho(person) {
    return person;
}
let foo;
foo = personEcho(admin);
console.log(foo);
foo = personEcho(manager);
console.log(foo);
