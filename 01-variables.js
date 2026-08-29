// 01-variables.js: Quick guide to js variables

// 1. 'let': Use this when the value needs to change later
let score = 0;
score = 10;

// 2. 'const': Use this for values that should NEVER change
const username = "Ebenezer";
// username = "Alex"; // Error! You can't reassign a const

// 3. Basic Data Types in action
let age = 16;  // Number
let isCoder = true; // Boolean
let language = "JavaScript"; // string
let emptyValue = null;  // Null
let notAssigned; // undefined

// Print everything out to test it
console.log(username, "is", age, "years old learning", language);