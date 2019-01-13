var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var aPerson = new Person('Sandeep');
console.log(aPerson);
var Shape = /** @class */ (function () {
    function Shape() {
        this.type = 'Circle';
    }
    return Shape;
}());
var aShape = new Shape();
console.log(aShape);
/*
readonly works in 2 cases
1. declaration and initialization
2. inside the constructor
After that it is not allowed to edit the variable
*/ 
