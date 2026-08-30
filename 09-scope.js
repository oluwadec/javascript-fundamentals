// 09-scope.js: Understanding where variables live

let globalVar = "I am available everywhere";

function testScope() {
    let localVar = "I am only inside this function";
    console.log(globalVar); // Works!
    console.log(localVar);  // Works!
}

testScope();
// console.log(localVar); // Error! localVar doesn't exist outside the function