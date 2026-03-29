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

// 13.(String trim()) The trim() method removes whitespace from both sides of a string:
let text13 = "     Hello World!     ";
console.log(text13.length); // 22
console.log(text13.trim()); // "Hello World!"
console.log(text13.trim().length); // 12

// 14. (String trimStart()) ECMAScript 2019 added the String method trimStart() to JavaScript. The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text14 = "     Hello World!     ";
console.log(text14.length); // 22
console.log(text14.trimStart()); // "Hello World!     "
console.log(text14.trimStart().length); // 17

// 15. (String trimEnd()) ECMAScript 2019 added the string method trimEnd() to JavaScript. The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text15 = "     Hello World!     ";
console.log(text15.length); // 22
console.log(text15.trimEnd()); // "     Hello World!"
console.log(text15.trimEnd().length); // 17




/*Note:

JavaScript String Padding
ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.
 */

// 16. (String padStart()) The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.
// Pad a string with "0" until it reaches the length 4
let text16 = "5";
console.log(text16); // 5
console.log(typeof text16); // string
console.log(text16.padStart(4, "0")); // 0005
// Pad a string with "x" until it reaches the length 4:
console.log(text16.padStart(4, "x")); // xxx5
/*
Note:
The padStart() method is a string method.

To pad a number, convert the number to a string first.

See the example below.
 */
let numb = 5;
let numbConvertToText = numb.toString();
let padded = numbConvertToText.padStart(4, "0");
console.log(padded); // 0005

// 17. (String padEnd()) The padEnd() method pads a string from the end.It pads a string with another string (multiple times) until it reaches a given length.
let text17 = "5";
console.log(text17.padEnd(4, "0")); // 5000
console.log(text17.padEnd(4, "x")); // 5xxx
/*
Note:
The padEnd() method is a string method.

To pad a number, convert the number to a string first.

See the example below..
 */
let numb2 = 5;
let numbConvertToText2 = numb2.toString();
let padded2 = numbConvertToText2.padEnd(4, "0");
console.log(padded2); // 5000

// 18. (String repeat()) The repeat() method returns a string with a number of copies of a string. The repeat() method returns a new string. The repeat() method does not change the original string.
// Create copies of a text:
let text18 = "Hello world!";
console.log(text18.repeat(2)); // Hello world!Hello world!
console.log(text18.repeat(4)); // Hello world!Hello world!Hello world!Hello world!

// 19. (String replace()) The replace() method replaces a specified value with another value in a string:
let text19 = "Please visit Microsoft!"
let newText = text19.replace("Microsoft", "W3Schools");
console.log(text19); // Please visit Microsoft!
console.log(newText); // Please visit W3Schools!
/*
Note:
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
*/
// By default, the replace() method replaces only the first match:
let oldText = "Please visit Microsoft and Microsoft!";
let oldNewText = oldText.replace("Microsoft", "W3Schools");
console.log(oldText); // Please visit Microsoft and Microsoft!
console.log(oldNewText); // Please visit W3Schools and Microsoft!
// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let someText = "Please visit Microsoft!"
console.log(someText); // Please visit Microsoft!
console.log(someText.replace("MICROSOFT", "W3Schools")); // Please visit Microsoft!
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log(someText.replace(/MICROSOFT/i, "W3Schools")); // Please visit W3Schools!
/*
Note:
Regular expressions are written without quotes.
*/
// To replace all matches, use a regular expression with a /g flag (global match):
console.log(oldText.replace(/Microsoft/g, "W3Schools")); // Please visit W3Schools and W3Schools!

// 20. (String replaceAll()) In 2021, JavaScript introduced the string method replaceAll():
let text20 = "I love cats. Cats are very easy to love. cats are very popular.";
console.log(text20.replaceAll("Cats", "Dogs")); // I love cats. Dogs are very easy to love. cats are very popular.
console.log(text20.replaceAll("cats", "dogs")); // I love dogs. Cats are very easy to love. dogs are very popular.
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced. If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
console.log(text20.replaceAll(/Cats/g, "Dogs")); // I love cats. Dogs are very easy to love. cats are very popular.
console.log(text20.replaceAll(/cats/g, "dogs")); // I love dogs. Cats are very easy to love. dogs are very popular.
/*
Note:
replaceAll() is an ES2021 feature.

replaceAll() does not work in Internet Explorer.
 */


/*
Converting a String to an Array:
If you want to work with a string as an array, you can convert it to an array.
 */
// 21. (String split()) A string can be converted to an array with the split() method:
let text21 = "a, b, c, d, e, f";
console.log(text21.split(",")); // Split on commas // [ 'a', ' b', ' c', ' d', ' e', ' f' ]
console.log(text21.split(" ")); // Split on spaces // [ 'a,', 'b,', 'c,', 'd,', 'e,', 'f' ]
console.log(text21.split("|")); // Split on pipe // [ 'a, b, c, d, e, f' ]
// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:
console.log(text21.split("")); /*[
  'a', ',', ' ', 'b',
  ',', ' ', 'c', ',',
  ' ', 'd', ',', ' ',
  'e', ',', ' ', 'f'
] */