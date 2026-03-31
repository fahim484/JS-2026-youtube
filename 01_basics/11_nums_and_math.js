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
// Note: toFixed(2) is perfect for working with money.

// 04. (The toPrecision() Method): toPrecision() returns a string, with a number written with a specified length:'
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // 23.9
const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3)); // 124
console.log(anotherNumber.toPrecision(4)); // 123.9
const newNumber = 1123.8966
console.log(newNumber.toPrecision(3)); // 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 // Default U.S Standard
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 // Indian Standard
console.log(hundreds.toLocaleString('bn-BD')); // ১০,০০,০০০ // Bangladeshi Standard
console.log(hundreds.toLocaleString('bn-BD', {
  style: 'currency',
  currency: 'BDT',
  minimumFractionDigits: 2
})); // ১০,০০,০০০.০০৳



// +++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4 (+4) // Negative to Positive
console.log(Math.abs(4)); // 4 (+4) // Positive to Positive
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(4.0)); // 4
console.log(Math.floor(4.0)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8, 2, 9 , 15, 7)); // 2
console.log(Math.max(4, 3, 6, 8, 2, 9 , 15, 7)); // 15

console.log(Math.random()); // Always looping value between 0 to 1(0-1) (Decimal)
console.log((Math.random() * 10) + 1); // 
console.log(Math.floor(Math.random() * 10) + 1); // Lowest Value for "floor"


// Tips & Tricks:
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)