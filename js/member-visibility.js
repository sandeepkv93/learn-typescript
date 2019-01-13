class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        console.log('Hey There!');
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Programmer extends Person {
    greet() {
        console.log('Hello World');
    }
    greetLikeNormalPerson() {
        super.greet();
    }
}
var aProgrammer = new Programmer('Sandeep', 'Vishnu');
aProgrammer.greet();
// aProgrammer.greetLikeNormalPerson(); Not Visible
var bProgrammer = new Programmer('SANDEEP', 'VISHNU');
bProgrammer.greet();
bProgrammer.greetLikeNormalPerson();
