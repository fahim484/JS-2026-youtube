/**
 * () --> parentheses
 * {} --> curly braces or curly brackets or braces
 * [] --> square brackets or brackets
 */

// Array Basic:-

// Array Declare 01:
const myArr = [0, 1, 2, 3, 4, 5, true, "Fahim"] // Different data type of elements in an array.

// Array Declare 02:
const myArray = [0, 1, 2, 3, 4, 5] // Single data type of element in an array.
console.log(myArray[0]); // 0

// Array Declare 03:
const myHeroes = ["Spider-man", "Iron-man"]

// Array Declare 04:
const myArray2 = new Array(1, 2, 3, 4)
console.log(myArray2[1]); // 2 



// Array Methods:

const newArr = [1, 2, 3, 4, 5]
newArr.push(6)
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]
newArr.push(7)
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7]
newArr.pop() // Remove element from the last.
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]
newArr.unshift(9)
console.log(newArr); // [9, 1, 2, 3, 4, 5, 6 ]
newArr.shift(9)
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(newArr.includes(9)); // false // boolean dataType
console.log(newArr.indexOf(9)); // -1
const heyArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(heyArr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(heyArr.indexOf(0)); // 0
console.log(heyArr.indexOf(1)); // 1
console.log(heyArr.indexOf(3)); // 3

const allNewArr = heyArr.join()
console.log(heyArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(typeof newArr); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] // object 
console.log(allNewArr); // 0,1,2,3,4,5,6,7,8,9 // string
console.log(typeof allNewArr); // string



// slice, splice method (Interview Questions):

const sArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("A ", sArr); // A [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// slice:-
const myn1 = sArr.slice(1, 3) // Do Not Manipulate Original Array.
console.log(myn1); // [ 1, 2 ]
console.log("B ", sArr); // B [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// splice:-
const myn2 = sArr.splice(1, 3) // Manipulate Original Array.
console.log("C ", sArr); // C [0, 4, 5, 6, 7, 8, 9]
console.log(myn2); // [ 1, 2, 3 ]
