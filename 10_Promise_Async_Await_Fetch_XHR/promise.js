//promise.

console.log("script start");

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

//The very first step is to create a promise.

//promise is created by using new keyword.

// now inside this parenthesis we need to pass a function (called as executer function(which is used to execute the promise) now inside this function we need to pass 2 paramters(resolve,reject) which are itself a function).

const friedRice = new Promise((resolve, reject) => {

  //in this executer function the promise will resolve when the if condition will be satisfied.

  if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
    //when the promise is resovled we need to call this resolve and we can pass any value inside this resolve function , the value may be a string , or an object or any other value.
    resolve("Fried Rice");
  }
  
  else {
    //promise is rejected.
    reject("Something missing from the bucket");
  }
})
//above we have produced a promise.

// now we need to consume this above promise.

//To consume this promise we have a then method.

//then will take 2 callback functions as an input. the first callback will  execute when the promise will be resolved. and the other will execute if the promise is reject due to some problem.

// here the myfriedRice value will be taken from the value passed inside the resolve function in above promise inside the if condition.

//And the error value in the 2nd callback function will be taken from the value passed inside the reject function in above promise inside else condition.


friedRice.then((myfriedRice) => {
  console.log("lets eat ", myfriedRice);
},//2nd callback below will run when the promise will be rejected
  (error) => {
  console.log(error)
  })

//now we don't need to explicitly pass 2 callback functions we can simply write the above as .

//this is also the same as passsing 2 callback functions.

//here we do chaining with then by using catch , same hai concept , catch will run when promise is not resolved.

friedRice.then((myfriedRice) => {
  console.log("lets eat ",myfriedRice)
}).catch((error) => {
  console.log(error);
})


//now promise is also an aysnchronous task.

// so inorder to proof it (that promise is a async task). I will write some code below .

for (let i = 0; i <= 100; i++){
  console.log(Math.random(), i);
}

console.log("Script end !");

// Now guess the output of this complete code until here so you'll find. that the output is
// script start (ye print hoga console sabse pehle mein)
// fir uske baad jo bhi array hai wo  memory mein store ho jayega , fir jo promise object hai wo create hoga
// fir promise ko consume karna hai to uske liye  browser will take the promise (promise.then wali jo line hai)
// par output console mein abhi tak sirf script start hi likha hoga.
// fir uske baad for loop execute hoga in global execution context to console mein numbers print hone start ho jayega(loop will execute completely aur saare numbers ko print kar dega console mein) fir uske baad script end print hoga console mein fir last mein promise jo resolve hoga wo print hoga console mein , to browser ki interfernce ki wajah se promise last mein execute ho ra hai so it is  an asynchornous task.


// Now there is some more regarding this concept so for that i will create a new 02.promise.js file that will have the same code as this file but will have a set timeout function in it so we will see there what will happen.