// 08-array-methods.js: Advanced array tools (.map, .filter)

let numbers = [1, 2, 3, 4, 5];

// 1. .map(): Transform every item in an array (e.g., double them)
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2. .filter(): Keep only items that match a condition (e.g., even numbers)
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);