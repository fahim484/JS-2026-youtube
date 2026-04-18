const marvel_heroes = ["Thor", "Iron man", "Spider man"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes) // adds in existing main array

// console.log(marvel_heroes); // [ 'Thor', 'Iron man', 'Spider man', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heroes[3][1]); // Flash

// 01. Concat:-
const allHeroes = marvel_heroes.concat(dc_heroes) // return new array
console.log(allHeroes); // [ 'Thor', 'Iron man', 'Spider man', 'Superman', 'Flash', 'Batman' ]

// 02. spread operator (...):-
// The JavaScript spread operator (...) allows an iterable (like an array or string) or an object to be expanded in places where multiple arguments, elements, or key-value pairs are expected.
const all_new_heroes_merged = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes_merged); // [ 'Thor', 'Iron man', 'Spider man', 'Superman', 'Flash', 'Batman' ]


// 03. 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // SpreadOut
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// 04. Data Scraping(NodeList, Object, String --> Array(Loop)) (Convert to Array)
console.log(Array.isArray("Fahim")); // false
console.log(Array.from("Fahim")); // [ 'F', 'a', 'h', 'i', 'm' ]
console.log(Array.from({name: "Fahim"})); // [] // Interview Question



// 05.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

