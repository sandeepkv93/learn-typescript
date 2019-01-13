class Human {
    getFullName() {
        return this.firstName + '' + this.lastName;
    }
}
let person1 = new Human();
console.log(person1); // Prints Human {}
let someObject = {
    firstName: "Sandeep",
    lastName: "Vishnu",
    getFullName: () => 'Test'
};
// Allowed. Duck Typing. Since the body of object someObject is similar to that of Person, this is a valid assignment;
person1 = someObject;
console.log(person1);
/*
Prints

{ firstName: 'Sandeep',
  lastName: 'Vishnu',
  getFullName: [Function: getFullName]
}
*/
