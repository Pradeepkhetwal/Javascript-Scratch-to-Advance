//lexical scope.
// Lexical scope means that the scope of a variable is determined by where it is written in the code (not when or how the code is run).

// The word "lexical" just means "by position" — so think of it as:

// 🕵️‍♂️ How does this work?
// If you declare a variable inside a function, it can only be accessed inside that function or by any nested functions within it.

// If you declare a variable outside a function, it can be accessed by all code within that scope.

function outer() {
  let a = 10;
  function inner() {
    // Here inner functon is capable of using a as both 'a' and 'inner' function are in the same scope that is inside the outer function.
    console.log(a);
  }
}

const myVar = "value1";
function myApp() {

  function myfunc() {
   
    console.log("inside myfunc", myVar);
   };
  console.log(myVar);
  myfunc();
}

myApp();

//every function will use myVar. without giving any error.




// Imp-: Difference between leical scoping and Hoisting.
/* 
Lexical scoping decides where variables/functions are available (based on where they are written).

Hoisting decides when you can access them (sort of — it makes them available earlier, but sometimes not with their actual value).
*/