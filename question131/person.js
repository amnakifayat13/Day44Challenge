"use strict";
/* Create two modules; one that exports a class, and another that imports the class and creates an instance.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("hello my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
