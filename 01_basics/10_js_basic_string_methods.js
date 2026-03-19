// Creating strings:
/**
 Strings can be created as primitives, from string literals, or as objects, using the String() constructor(In JS we can String Declare 2 Ways):
 */

// Number One(1) Way:
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

// Number Two(2) Way:
const string4 = new String("A String object");


/**
JavaScript Basic String Methods:-
 */
const allStringMethods = new String("Fahim")

// The length property returns the length of a string:
console.log(allStringMethods.length); // 5

// The charAt() method returns the character at a specified index (position) in a string:
console.log(allStringMethods.charAt(4)); // m

// The charCodeAt() method returns the code of the character at a specified index in a string(The method returns a UTF-16 code (an integer between 0 and 65535).):
console.log(allStringMethods.charCodeAt(4)); // 109

// Get code point value at the first position in a string:
console.log(allStringMethods.codePointAt(4)); // 109

//ES2022 introduced the string method at():
