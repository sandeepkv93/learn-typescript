var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.getFullName = function () {
        return this.firstName + '' + this.lastName;
    };
    return Human;
}());
var person1 = new Human();
console.log(person1); // Prints Human {}
var someObject = {
    firstName: "Sandeep",
    lastName: "Vishnu",
    getFullName: function () { return 'Test'; }
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
