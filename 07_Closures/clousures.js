//concept of code execution in javascript.

//sabse phele GEC(Global executino context) create hota hai which is in 2 phase.

//1st phase is memory creation where all the function are stored in the memeory if const and var are present they are unitialized and in the next phase.
//2nd phase execution is done so function to as it is present hai memory so no problem nothing will happen then when the line const myFunc = func() will be executed func() will return the function which it supposed to return with counter value as 0 and all it's envionment.

//now when myFunc() is called then in the stack over Global Execution context a function execution context will be created(it is created when in execution phase a function is called ) so here now we will again have 2 phase memeory creation phase (where the arguments values will be assigned to variables) and the 2nd phase will be execution phase where the function will be executed.

//below i have explained closure concept.


function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi you called me");
      counter++
    }
    else {
      console.log("mai aleready ek baar cll ho gya hoon")
    }
  }
}

//Closure concept-:

//closure ka concept simply ye hai ki jab bhi koi bhi function kisi bhi function ko return karta hai to jo bhi function return hota hai wo apne lexcial environment k saath return hoga means here const myFunc = func() so when we call myFunc() to it will take the argument values simply form the lexcical environment of func() function.




const myFunc = func();
myFunc();
myFunc();

//output of the code is 
//Hi you called me
// mai aleready ek baar cll ho gya hoon