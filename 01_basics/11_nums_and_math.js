const score = 400
console.log(score); // 400 // Automatically JavaScript defined a Number Type.

const balance = new Number(100) // Object(Number Type)
console.log(balance); // [Number: 100] // It is Specifically casted a Number Type.

// 01. (The toString() Method): The toString() method returns a number as a string. All number methods can be used on any type of numbers (literals, variables, or expressions):
console.log(balance.toString()); // 100 (String)
console.log(typeof balance.toString()); // String
console.log(balance.toString().length); // 3

// 02. (The toExponential() Method): toExponential() returns a string, with a number rounded and written using exponential notation. A parameter defines the number of characters behind the decimal point:
const x = 9.656;
console.log(x.toExponential()); // 9.656e+0
console.log(x.toExponential(2)); // 9.66e+0
console.log(x.toExponential(4)); // 9.6560e+0
console.log(x.toExponential(6)); // 9.656000e+0


// 03. (The toFixed() Method): toFixed() returns a string, with the number written with a specified number of decimals:
console.log(balance.toFixed(2)); // 100.00
