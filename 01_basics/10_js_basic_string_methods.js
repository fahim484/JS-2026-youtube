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

// (String length) The length property returns the length of a string:
console.log(allStringMethods.length); // 5
console.log(allStringMethods.length-2); // 3

// (String charAt()) The charAt() method returns the character at a specified index (position) in a string:
console.log(allStringMethods.charAt(4)); // m

// (String charCodeAt()) The charCodeAt() method returns the code of the character at a specified index in a string(The method returns a UTF-16 code (an integer between 0 and 65535).):
console.log(allStringMethods.charCodeAt(4)); // 109

// (String codePointAt()) Get code point value at the first position in a string:
console.log(allStringMethods.codePointAt(4)); // 109

//ES2022 introduced the string method at():
// Get the third letter of name:
console.log(allStringMethods.at(2)); // h
console.log(allStringMethods[2]); // h
console.log(allStringMethods.at(-2)); // i

// (String[]) Property Access [ ]:
console.log(allStringMethods[0]); // F
/*Note:
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
 */
console.log(allStringMethods[0] = "A"); // Gives no error, but does not work

// (String concat()) Concat() joins two or more strings:
let text = "Hello"
console.log(allStringMethods.concat(" ", text)); // Fahim Hello
// The concat() method can be used instead of the plus operator. These two lines do the same:
console.log(allStringMethods + "Hello " + " " + "World!"); // Fahim Hello
let subText = "Hello".concat(" ", "World!");
console.log(subText); // Hello World!

/*Note:
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.
 */



/*Extracting String Parts:
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */


// (String Slice()) slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).
const foods = "Apple, Banana, Kiwi";
console.log(foods.slice(7, 13)); // Banana

/*Note:
JavaScript counts positions from zero.

First position is 0.

Second position is 1.
*/
// If you omit the second parameter, the method will slice out the rest of the string:
console.log(foods.slice(7)); // Banana, Kiwi
// If a parameter is negative, the position is counted from the end of the string:
console.log(foods.slice(-12)); // Banana, Kiwi
// This example slices out a portion of a string from position -12 to position -6:
console.log(foods.slice(-12, -6)); // Banana



// (String substring()) substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().