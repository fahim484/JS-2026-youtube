/**** JS Basic Comparison (JavaScript Comparison Operators) ****/
/**
Comparison operators are used to compare two values.
Comparison operators always return boolean values "true" or "false".
 */

// console.log(2 == 1); // false (equal to)
// console.log(2 == 2); // true (equal to)
// console.log(2 == "2"); // true (equal to)

// console.log(2 === 2); // true (equal value and equal type)
// console.log(2 === "2"); // false (equal value and equal type)

// console.log(2 != 1); // true (not equal)

// console.log(2 !== 2); // false (not equal value or not equal type)
// console.log(2 !== "2"); // true (not equal value or not equal type)
// console.log(2 !== 1); // true (not equal value or not equal type)

// console.log(2 > 1); // true (greater than)
// console.log(2 >= 1); // true (greater than or equal to)
// console.log(2 < 1); // false (less than)
// console.log(2 <= 1); // true (less than or equal to)


/* Comparison operators can be used in conditional statements to compare values and take action depending on the result: */

// if (age < 18) text = "Too young to buy alcohol";


/* Whenever you compare any values, make sure that the DataType of both of them is the same. (? Avoid this type of code conversion) */
// console.log("2" > 1); // true
// console.log("02" > 1); // true



// ? Avoid this type of code conversion:
console.log(null > 0); // null = 0 (0 > 0)--> false (Value Conversion)
console.log(null == 0); // equality operator (Value Conversion)
console.log(null >= 0); // null = 0 (0 >= 0)--> true (Value Conversion)

/**
The reason is that an equality check ( == ) and comparisons ( > < >=
<= ) work differently.
Comparisons ( > < >= <= ) convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.

Note: Equality Check Operators (==, ===){Covert --> NaN} and Comparison Operators ( > < >= <= ){Convert --> 0} these are two unique unique things.
 */



// ? Avoid this type of code conversion:
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false



// TODO: In JavaScript two things are there, One is Comparison(>, <, >=, <=, !=) and another is equality check(==, ===). These are two uniquely different things in JS.


// Strict Check(===):
console.log("2" === 2); // false // Check both value DataTypes(In Strict Check Value Conversion not working)


/*
 * Clean Code
 * Clean Code
 * Clean Code
 * Clean Code
 */