/********************* Operations ****************************/

let value = 3
let negValue = -value
console.log(negValue); // -3


// Basic JavaScript Arithmetic Operators:
// console.log(2+2); // Addition
// console.log(2-2); // Subtraction
// console.log(2*2); // Multiplication
// console.log(2**2); // Exponentiation (ES2016)
// console.log(2/2); // Division
// console.log(2%2); // Modulus (Remainder)
// console.log(2++); // Increment
// console.log(2--); // Decrement


// JS String Concatenation:
let str1 = "hello"
let str2 = " Fahim"

let str3 = str1 + str2
console.log(str3);


// !!! Bad Code Example: !!!
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log(3 + 4 * 5 % 3);



// ### Good Code Example: ###
console.log((3 + 4) * 5 % 3); // 2
console.log(true); // true




// !!! Bad Code Example: !!!
console.log(+true); //1
// console.log(true+); // Unexpected token
console.log(+""); // 0
let num1, num2, num3
num1 = num2 = num3 = 2 + 2




// Tricky Question:
let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101
let gameCounter2 = 100
++gameCounter2;
console.log(gameCounter2); // 101

/**
 prefix and postfix js mdn Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
 */

/**
Link to study: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
 */