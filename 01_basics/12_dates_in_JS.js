// 01. Dates:

let myDate = new Date() // This is Date Object or Date Object Instance.
console.log(myDate); // 2026-04-02T09:50:06.470Z
console.log(myDate.toString()); // Thu Apr 02 2026 09:51:23 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Thu Apr 02 2026
console.log(myDate.toLocaleString()); // 4/2/2026, 9:54:41 AM

console.log(myDate.toISOString); // [Function: toISOString]
console.log(myDate.toJSON()); // 2026-04-02T09:53:44.888Z
console.log(myDate.toLocaleDateString()); // 4/2/2026


/* $$ InterView Question: What type of DataType is Date? 
Ans: Date is an object in JavaScript.
*/
console.log(typeof myDate); // object (dataType)


// 02. Declared a specific data:
let myCreatedDate = new Date(2026, 0, 26) // Month start with zero(0) in JavaScript.
console.log(myCreatedDate); // 2026-01-26T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Jan 26 2026


// 03. Another way to Declared a specific date & time:
let myAnotherCreatedDate = new Date(2026, 0, 26, 5, 3, 8)
console.log(myAnotherCreatedDate); // 2026-01-26T05:03:08.000Z
console.log(myAnotherCreatedDate.toLocaleString()); // 1/26/2026, 5:03:08 AM

// 04. Another way to Declared a specific date & time:
let myNewCreatedDate = new Date("2026-01-15") // (yy-mm-dd) // Month start with one(1) in JavaScript.
console.log(myNewCreatedDate); // 2026-01-15T00:00:00.000Z
console.log(myNewCreatedDate.toLocaleString()); // 1/15/2026, 12:00:00 AM

// 05. Another way to Declared a specific date & time:
let mySomeCreatedDate = new Date("01-15-2026") // (mm-dd-yy)  // Month start with one(1) in JavaScript.
console.log(mySomeCreatedDate); // 2026-01-15T00:00:00.000Z
console.log(mySomeCreatedDate.toLocaleString()); // 1/15/2026, 12:00:00 AM

// 06. Another way to Declared a specific date & time (specially you have to know the exact value of the time stamp. And specially when you design quizzes, you will design polls in ship kits, I have to make the poll who has given the fastest answer the winner. In these cases we use the time stamps.):

// Always Date Comparison in milliseconds.

let newCreatedDate = new Date("01-26-2026") // (mm-dd-yy)  // Month start with one(1) in JavaScript.

let myTimeStamp = Date.now() // It returns today exact date.
console.log(myTimeStamp); // 1775125859007 (Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).)
console.log(newCreatedDate.getTime()); // 1769385600000 (Converts the number of milliseconds)
/* $$ InterView Question: How to Converts a Date into to Seconds or How to Converts Milliseconds to Seconds?
*/
console.log(Date.now()); // milliseconds // 1775126543503
console.log(Date.now()/1000); // 1775126699.831
console.log(Math.floor(Date.now()/1000)); // seconds // 1775126743
console.log(Math.round(Date.now()/1000)); // seconds // 1775126743

// 07. Another way to Declared a specific date & time:
let newDate = new Date()
console.log(newDate); // 2026-04-02T10:47:58.638Z
console.log(newDate.getDate()); // 2 // Day start with one(1) in here JavaScript.
console.log(newDate.getMonth()); // 3 // Month start with zero(0) in here JavaScript.
console.log(newDate.getMonth() + 1); // 4 // Month start with zero(0) but we can fix with plus one (+1) to output exact number of month.
 


// 08. JavaScript Date String Interpolation. String Interpolation means backticks(`${}`):
// `${newDate.getDay()} and the time is`


// 09. Another way to Declared a specific date & time (More Customization):
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Dhaka"
})