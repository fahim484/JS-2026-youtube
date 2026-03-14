/** There are two types of memories:
1. Stack (Primitive DataType) <--- Copy Value from a declared variable(Copy Value)
2. Heap (Non-primitive/Reference DataType) <--- Original Value Reference(Original Value)
 */


// Stack Memory Example(Primitive DataType):
let myYoutubeName = "fahimdotcom"

let anotherName = myYoutubeName

console.log(anotherName); // fahimdotcom

anotherName = "moneyandcode"

console.log(myYoutubeName); // fahimdotcom
console.log(anotherName); // moneyandcode




// Heap Memory Example(Non-primitive/Reference DataType)(Object Example):
let userOne = {
    email: "user@google.com",
    upi  : "user@ybl"
}

let userTwo = userOne

console.log(userOne.email); // user@google.com
console.log(userTwo.email); // user@google.com

userTwo.email = "fahim@google.com"

console.log(userOne.email); // fahim@google.com
console.log(userTwo.email); // fahim@google.com




// Site Link: https://www.geeksforgeeks.org/memory-management-in-javascript/