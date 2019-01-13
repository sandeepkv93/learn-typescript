class Person {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let aPerson: Person = new Person('Sandeep');
console.log(aPerson);

class Shape {
    readonly type: string = 'Circle';
}

let aShape = new Shape();
console.log(aShape);

/*
readonly works in 2 cases
1. declaration and initialization
2. inside the constructor
After that it is not allowed to edit the variable
*/