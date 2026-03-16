const name = "Fahim"
const repoCount = 50

// concatenate (join) strings:

// // Outdated Syntax(do not use):
console.log(name + repoCount + " Value"); // concatenate(Concatenation)

// Modern Syntax(must use(backtick symbol(``))) [template literals or template strings]:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //backtick (String interpolation) always use this (back-end a besi use hoi)



// String Declare:
const gameName = new String('Fahim-ff-com')

console.log(gameName[0]); // Key : Value pair access
console.log(gameName.__proto__); // object find method


// String Method:
console.log(gameName.length); // 12
console.log(gameName.toUpperCase()); // FAHIM-FF-COM
console.log(gameName.charAt(4)); // m // position of character
console.log(gameName.indexOf('m')); // 4 // character of position


const newString = gameName.substring(0, 4)
console.log(newString); // Fahi

const anotherString = gameName.slice(0, 4)
const anotherString2 = gameName.slice(-7, 4)
console.log(anotherString); // Fahi
console.log(anotherString2); // 


const newStringOne = "   fahim   "
console.log(newStringOne); // "   fahim   "
console.log(newStringOne.trim()); // "fahim" (trim remove star and end spaces(white space))



const url = "https://fahim.com/fahim%20faysal"

console.log(url.replace('%20', '-')) // https://fahim.com/fahim-faysal

console.log(url.includes('fahim')); // true // finds something
console.log(url.includes('good'));  // false // finds something


// Convert String to Array (Function or Method):
console.log(gameName.split('-')); // [ 'Fahim', 'ff', 'com' ]
