/* $$ InterView Question: In JavaScript how the data is kept in the memory and accessed on the basis of the data there TWO classifications,

1. Primitive Data Type(Copy Memory) --> Numeric Type(Number, BigInt) and Non-Numeric Type(String, Boolean, Null, Undefined, Symbol)

2. Non-primitive/Reference Data Type(Access Original Memory) --> Object (Object, Array, Function, Date, RegExp->Set,Map )
 
 */



// Primitive Data Types(7 Types): String, Number, Boolean (true/false), null (empty), undefined, Symbol, BigInt.


// (1) String:
let lastName = "Johnson";

// (2) Number:
const score = 100
const scoreValue = 100.3

// (3) Boolean:
const isLoggedIn = false
const isHere = true

// (4) null:
const outsideTemp = null // completely empty

// (5) undefined:
// let useEmail = undefined; or let useEmail;


// (6) Symbol:
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
console.log(id);
console.log(anotherId);

// (7) BigInt:
const bigNumber = 234028045435203994n




// Non-primitive/Reference Data Type(3 Types)(Function DataType): Array, Object, Function.

// (1) Array:
const heroes = ["superman", "batman", "spider man"]

// (2) Object:
let person = {
    name: "fahim", // Key:Value pairs
    age : 22,
}

// (3) Function:
const myFunction = function() {
    console.log("Hello World!");
}


/* $$ InterView Question: javascript is dynamically typed or statically typed language?

Ans: JavaScript is a "dynamically typed" language. This means that you do not need to explicitly declare the data type of a variable, and the same variable can hold values of different types during the program's execution.
 */





// JavaScript typeof Operator for knowing data types:
console.log(typeof lastName); // string
console.log(typeof score); // number (Integer)
console.log(typeof scoreValue); // number (Float)
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object (InterView Question)
console.log(typeof useEmail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint





/** Note:
 All Non-primitive/Reference Data Type(3 Types)(Function DataType) return type(data type) always return a Object.
 */

console.log(typeof heroes); // object
console.log(typeof person); // object
console.log(typeof myFunction); // (Object-Function Data Type)





// InterView Question Link: https://262.ecma-international.org/5.1/#sec-11.4.3