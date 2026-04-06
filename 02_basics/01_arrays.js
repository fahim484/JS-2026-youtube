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
console.log(newArr.includes(9)); // false
console.log(newArr.indexOf(9)); // -1
console.log(newArr.indexOf(1)); // 2

const allNewArr = newArr.join()
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(typeof newArr); // [ 1, 2, 3, 4, 5, 6 ] // object 
console.log(allNewArr); // 1,2,3,4,5,6 // string
console.log(typeof allNewArr); // 1,2,3,4,5,6 // string



// slice, splice method:
console.log("A ");
