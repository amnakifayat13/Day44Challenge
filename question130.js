"use strict";
/* Explain how to export a function from one JavaScript file and import it into another file.*/
Object.defineProperty(exports, "__esModule", { value: true });
var AnotherFile_1 = require("./AnotherFile");
console.log((0, AnotherFile_1.addition)(10, 5));
