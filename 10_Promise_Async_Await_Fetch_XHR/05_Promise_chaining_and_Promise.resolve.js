// promise resolve.

// Promise.resolve jo hoga wo ek value lega aur return mein ek resolved promise dega jiski value hogi jo bhi hum pass karenge.


//here a resolved promise will be returned whose value will be 5.

const myPromise = Promise.resolve(5);

//it will print 5.
//here as we are having arrow function so it is not necessary to use () parenthesis for value variable.
myPromise.then(value => {
  console.log(value);
})

//we can also write the above as .

Promise.resolve(5).then(value => {
  console.log(value);
})


//then() method always returns promise.

//so with the help of then() we can create chain of promises.

//look here the concept.

//this function returns a promise which give foo when it is resolved. And it is always resolved.
function AnyPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  })
}

AnyPromise().then((value) => {
  console.log(value);
  value += "bar";
  //note - this return statement will not return the value variable , it is returning a promise.
  //like in backend it is returning like Promise.resolve(value); so now to handle this promise we can add one more then statement .

  //and also remember ki agar hum valu += bar karke value ko return nahi karenge to automatically undefined return ho jayega jo jitne tumne then chain kiye hai they will also print undefined.
  return value;
}).then((value) => {
  //it will print foobar.
  console.log(value);
  value += "baaz";
  return value;
}).then(value => {
  //it will print foobarbaaz.
  console.log(value);
})