//callback function.


//to dekho ek function ko as a parameter pass karte hai aur fir use last mein uss function k andar jiske andar wo pass hua hai wha call karte hai this is callback function.

function myFunc(callback) {
  
  console.log("hello world");
  callback();
}


function call() {
  console.log("I am callback function");
}
myFunc(call);