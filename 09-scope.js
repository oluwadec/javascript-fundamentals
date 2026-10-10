let globalVar = "I am available everywhere";

function testScope() {
    let localVar = "I am only inside this function";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
