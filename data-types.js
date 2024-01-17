// console.log() is a debugging tool.
// console.log("Hello, World!");

/* Data Types */

/* String - a combination of letters, symbols or numbers */

// String in Double Quotes
//console.log("Hello, my name is Bernardo.");

// String in Single Quote
//console.log('Hello, my name is Bernardo.');

/* Store a String in a Variable */

/* Variable - box to store data types. */
let myName = "Bernardo";

// Re-assign the Variable
myName = "Ironhack";

// String Interpolation - Act of storing variable's data inside a string.
// console.log(`Hello, my name is ${myName}`);

// New Lines - Only possible with backticks.
let fruits = `Kiwi
Banana
Blueberry
Apple
Strawberry`;

// Calcule the length of a string
let longestWord = "pneumonoultramicroscopicsilicovolcanoconiosis";

// console.log(longestWord.length);

// Add Strings
let lxCity = "Lisbon";
let madrid = "Madrid";

// console.log(lxCity + " " + madrid);

// Check if a string includes a word. 

const breakingFree = "We're soarin', flyin'. There's not a star in heaven that we can't reach";

// console.log(breakingFree.includes("star"));
// console.log(breakingFree.includes("Tony Stark"));

/* Compare Words Alphabetically */

// console.log('porto'.localeCompare('algarve'));
// console.log('benfica'.localeCompare('lisboa'));

/* EXERCISE */

// Check if 'golang' goes after 'go'; 
// console.log('golang'.localeCompare('go') === 1)

// Check if 'rust' goes before 'react';
// console.log('rust'.localeCompare('react') === -1);


/* Booleans */
let truthBoolean = true; 
let falseBoolean = false;

// Boolean Logic Operators 

// || - OR Operator - checks if either one of the statements is true. 
// console.log(4>2 || 1>1000);

// && - AND Operator - checks if all statements are true. 
// console.log(4 > 2 && 1 > 1000);

// ! - NOT Operator - checks if the statements that we want to compare are different. 
console.log(4!==2);

// UNDEFINED, NULL. 
// Undefined is, for example, a variable that was declared, but does not hold any value. 
let ironhack; // -> ironhack is not defined yet!

// Null is something that is not defined, nor even was stored any piece of memory placed for a future value. 
console.log(null);

/* Numbers */
// Sum Number 
// console.log(2+2);

// Subract Number
// console.log(4-2);

// Multiply Number
// console.log(2*2);

// Divide Number
// console.log(8/4);


/* Rounding Numbers */

// Round to the closest integer number
// Output: 5
// console.log(Math.round(4.75));

// Round to the bottom integer number
// Output: 6
// console.log(Math.floor(6.85));

// Round to the top integer number
// Output: 8
// console.log(Math.ceil(7.15));

/* Random Numbers */

// Generate a Random Number between 0 and 1.
console.log(Math.random());

// Generate a Random Number between 1 - 10. 
console.log((Math.random() * 10) + 1);

// Generate a Random Integer Number between 1 - 10. 
console.log(Math.floor((Math.random()*10)+1));

