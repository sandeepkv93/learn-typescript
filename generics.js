var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function echo(arg) {
    return arg;
}
var myStr;
myStr = echo('Sandeep');
// myStr = echo(1); Doesn't work because Type '1' is not assignable to type 'string'
console.log(myStr);
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
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person));
var admin = new Admin('adminF', 'adminL');
var manager = new Manager('managerF', 'managerL');
function personEcho(person) {
    return person;
}
var foo;
foo = personEcho(admin);
console.log(foo);
foo = personEcho(manager);
console.log(foo);
