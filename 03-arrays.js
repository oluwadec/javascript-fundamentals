// 1. Creating an array of items (like numbers or strings)
let skills = ["C++", "Python", "JavaScript"];
console.log("My skills:", skills);

// 2. Accessing items by index (starts at 0)
console.log("First skill:", skills[0]); // C++

// 3. Adding an item to the end using .push()
skills.push("Git");
console.log("After push:", skills);

// 4. Removing the last item using .pop()
skills.pop();
console.log("After pop:", skills);

// 5. Checking how many items are in the array
console.log("Total skills:", skills.length);