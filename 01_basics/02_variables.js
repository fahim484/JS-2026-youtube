const accountId = 484 // value not changeable
let accountEmail = "fahim@google.com"
var accountPassword = "12345"
accountCity = "Dhaka" // It's not good practice (Don't Use)
let accountState; // value = undefined;

// accountId = 8 // not allowed in constant variable

// block scope or scope ---> {}


accountEmail = "ff@ff.com"
accountPassword = "888888"
accountCity = "Rajshahi"

console.log(accountId);

// console: table() static method:
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/