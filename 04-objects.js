// 1. Creating an object to store related data using key-value pairs
let student = {
    name: "Ebenezer",
    age: 16,
    isLearningToCode: true,
    languages: ["C++", "Python", "JavaScript"]
};

// 2. Accessing object properties (using dot notation or bracket notation)
console.log("Student Name:", student.name);
console.log("First Language:", student.languages[0]);

// 3. Updating an existing property
student.age = 17;
console.log("Updated Age:", student.age);

// 4. Adding a new property to the object
student.university = "FUTMINNA";
console.log("University:", student.university);

// 5. Viewing the full object
console.log("Full Student Object:", student);