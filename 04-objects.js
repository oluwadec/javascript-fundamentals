let student = {
    name: "Ebenezer",
    age: 16,
    isLearningToCode: true,
    languages: ["C++", "Python", "JavaScript"]
};

console.log("Student Name:", student.name);
console.log("First Language:", student.languages[0]);

student.age = 17;
console.log("Updated Age:", student.age);

student.university = "FUTMINNA";
console.log("University:", student.university);

console.log("Full Student Object:", student);
