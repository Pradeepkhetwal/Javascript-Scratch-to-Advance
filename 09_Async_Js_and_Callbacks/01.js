// Javascript is a synchronous programming language and single threaded.

//Then how do we do Asynchronous Programming in javascript.

//let's discuss settimeout function.

const hello = function () {
  console.log("hello world")
}
//it takes function as an input.
//here 1000 is delay means after 1000 millisecond hello function will be called.Here we can pass arroow function as well.
console.log("Script starts");
setTimeout(hello, 1000);
console.log("Scripts end");

//the output of the above will be
// script starts.
// scripts end.
// hello world.

//this settimeout function is provided by the browser.

//here hello world comes at last becoz 1000 millisecond k baad hi hello function run hua hai.

