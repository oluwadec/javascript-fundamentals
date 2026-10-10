let message = "   Hello, Mechatronics Engineers!   ";

let cleanMessage = message.trim();
console.log("Trimmed:", cleanMessage);

console.log("Uppercase:", cleanMessage.toUpperCase());
console.log("Lowercase:", cleanMessage.toLowerCase());

console.log("Includes 'Engineers'?", cleanMessage.includes("Engineers"));

console.log("Slice (7, 20):", cleanMessage.slice(7, 20));
