//hoisting .


//function declaration k case mein we can call function before declaration it will run and give output , but we cannot do this in case of function expression.This happens in javascript this behaviour is called hoisting.

// Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before code is executed.
// That means:
// You can use functions and variables before you actually write them in the code (in some cases).

// Hoisting works differently for different types of functions and varaibles see below.

hello();

function hello() {
  console.log("hello");
}


// if we declare a variable using var keyword and if we use that variable before declaratin then we will get undefined. 

console.log(prad);
var prad = 10;

//But in case of const and let we will get error.//this will give error

console.log(a);
const a = 10;