class Person {
    constructor(
        private firstName: string,
        private lastName: string
    ) {}
    public greet(): void {
        console.log('Hey There!');
    }
    public getFullName(): string {
        return this.firstName +" "+ this.lastName;
    }
}

class Programmer extends Person {
    greet(): void {
        console.log('Hello World');
    }
    greetLikeNormalPerson(): void {
        super.greet();
    }
}

var aProgrammer: Person = new Programmer('Sandeep', 'Vishnu');
aProgrammer.greet();
// aProgrammer.greetLikeNormalPerson(); Not Visible

var bProgrammer: Programmer = new Programmer('SANDEEP', 'VISHNU');
bProgrammer.greet();
bProgrammer.greetLikeNormalPerson();