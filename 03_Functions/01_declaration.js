//functions are declared using function keyword.

// function hello() {
//   console.log("hello");
// }

function sum(num1,num2) {
  return num1 + num2;
}

console.log(sum(1, 1));


//function expression.

//To write function declaration as expression. we can use const keyword and write like this as below.

//This hello function is same as what declared above

const hello = function () {
  console.log("hello");
}

//function calling.
hello();