function echo < T > (arg: T): T {
    return arg;
}

let myStr: string;
myStr = echo('Sandeep');
// myStr = echo(1); Doesn't work because Type '1' is not assignable to type 'string'
console.log(myStr);

class Person {
    firstName: string;
    lastName: string;
    // Multiple Constructors are not allowed
    // Method overloading is also not allowed
    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

class Admin extends Person {

}

class Manager extends Person {

}

let admin = new Admin('adminF', 'adminL');
let manager = new Manager('managerF', 'managerL');

function personEcho < T extends Person > (person: T): T { // Generics work only for any class of type Person here
    return person;
}

let foo;
foo = personEcho(admin);
console.log(foo);
foo = personEcho(manager);
console.log(foo);