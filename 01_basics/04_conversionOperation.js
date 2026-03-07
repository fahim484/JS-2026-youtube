/** Convert Variable to Number: */
let score = 484

// const {score} = req.body
console.log(typeof score);
console.log(typeof (score));


score = "8888abc"

let valueInNumber = Number(score)
console.log(valueInNumber); // NaN (Not a Number)
console.log(typeof valueInNumber); // number


score = null

valueInNumber = Number(score)
console.log(valueInNumber); // 0
console.log(typeof valueInNumber); // number


score = undefined

valueInNumber = Number(score)
console.log(valueInNumber); // NaN (Not a Number)
console.log(typeof valueInNumber); // number


score = true

valueInNumber = Number(score)
console.log(valueInNumber); // 1
console.log(typeof valueInNumber); // number


score = "Fahim"

valueInNumber = Number(score)
console.log(valueInNumber); // NaN (Not a Number)
console.log(typeof valueInNumber); // number



/** Notes:
 * "484" --> 484
 * "8888abc" --> NaN (Not a Number) (Type:number)
 * true --> 1; false --> 0
 */





/** Convert Number to Boolean: */
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true(1)
console.log(typeof booleanIsLoggedIn); // boolean



isLoggedIn = ""

booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // false(0)
console.log(typeof booleanIsLoggedIn); // boolean



isLoggedIn = "Fahim"

booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true(1)
console.log(typeof booleanIsLoggedIn); // boolean



/**
 * 1 --> true; 0 --> false
 * "" --> false (0) (empty string --> false)
 * "Fahim" --> true (1)
 */





/** Convert Number to String: */
let someNumber = 488

let stringNumber = String(someNumber)
console.log(stringNumber); // 488
console.log(typeof stringNumber); // string

