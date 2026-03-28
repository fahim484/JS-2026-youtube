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

// 01.(String length) The length property returns the length of a string:
console.log(allStringMethods.length); // 5
console.log(allStringMethods.length-2); // 3

// 02.(String charAt()) The charAt() method returns the character at a specified index (position) in a string:
console.log(allStringMethods.charAt(4)); // m

// 03.(String charCodeAt()) The charCodeAt() method returns the code of the character at a specified index in a string(The method returns a UTF-16 code (an integer between 0 and 65535).):
console.log(allStringMethods.charCodeAt(4)); // 109

// 04.(String codePointAt()) Get code point value at the first position in a string:
console.log(allStringMethods.codePointAt(4)); // 109

// 05.(String at()) ES2022 introduced the string method at():
// Get the third letter of name:
console.log(allStringMethods.at(2)); // h
console.log(allStringMethods[2]); // h
console.log(allStringMethods.at(-2)); // i

// 06.(String[]) Property Access [ ]:
console.log(allStringMethods[0]); // F
/*Note:
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
 */
console.log(allStringMethods[0] = "A"); // Gives no error, but does not work

// 07.(String concat()) Concat() joins two or more strings:
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


// 08.(String Slice()) slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).
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
console.log(foods.slice(-12, -6)); // "" // slice() → empty string ("")  output দেয়

console.log(foods.slice(13, 7)); // Banana



// (String substring()) substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(foods.substring(7, 13)); // Banana
console.log(foods.substring(-12)); // Apple, Banana, Kiwi // Negative index (সবচেয়ে বড় পার্থক্য) substring() → negative index support করে না (0 ধরে নেয়). পুরো string (কারণ -4 → 0 ধরে নেয়)
console.log(foods.substring(13, 7)); // Banana // ভুল করে index উল্টা দিলে substring নিজে swap করে নেয়


// 09. (String substr()) substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
console.log(str.substr(7, 6)); // Banana
// If you omit the second parameter, substr() will slice out the rest of the string
console.log(str.substr(7)); // Banana, Kiwi
// If the first parameter is negative, the position counts from the end of the string.
console.log(str.substr(-4)); // Kiwi

// 10.(String toUpperCase()) A string is converted to upper case with toUpperCase():
let text4 = "Hello World!"; // // String
console.log(text4.toUpperCase()); // HELLO WORLD! // // text4 is converted to upper case

// 11.(String toLowerCase()) A string is converted to lower case with toLowerCase():
console.log(text4.toLocaleLowerCase()); // hello world! // // text4 is  converted to lower case


// 11.(String isWellFormed()) The isWellFormed() method returns true if a string is well formed. Otherwise it returns false. A string is not well formed if it contains lone surrogates.
let text11 = "Hello world!";
console.log(text11.isWellFormed()); // true
text11 = "Hello world \uD800";
console.log(text11.isWellFormed()); // false


/*Note:
Lone Surrogates -->
A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.
*/


// 12.(String toWellFormed()) The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).
let text12 = "Hello World \uD800";
console.log(text12.toWellFormed); // [Function: toWellFormed]



