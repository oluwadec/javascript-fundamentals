let codingScore = 85;

if (codingScore >= 90) {
    console.log("Grade: A - Excellent!");
} else if (codingScore >= 75) {
    console.log("Grade: B - Great job!");
} else {
    console.log("Grade: C - Keep practicing!");
}

let statusText = (codingScore >= 50) ? "Passed" : "Failed";
console.log("Status:", statusText);
