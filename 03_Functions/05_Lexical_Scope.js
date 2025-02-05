//lexical scope.
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