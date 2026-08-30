// 07-string-methods.js: Working with text

let message = "   Hello, Mechatronics Engineers!   ";

// 1. Remove extra spaces
let cleanMessage = message.trim();
console.log("Trimmed:", cleanMessage);

// 2. Change casing
console.log("Uppercase:", cleanMessage.toUpperCase());
console.log("Lowercase:", cleanMessage.toLowerCase());

// 3. Find a word inside a string
console.log("Includes 'Engineers'?", cleanMessage.includes("Engineers"));

// 4. Slice a portion of the string
console.log("Slice (7, 20):", cleanMessage.slice(7, 20));