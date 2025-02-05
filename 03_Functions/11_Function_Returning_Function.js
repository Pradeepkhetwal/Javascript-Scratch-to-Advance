//function returning function.

function myFunc() {
  return function hello() {
    console.log("hello");
  }
}

const a = myFunc();
a();