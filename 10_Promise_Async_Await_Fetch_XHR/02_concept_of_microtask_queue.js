//promise.

console.log("script start");

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];



const friedRice = new Promise((resolve, reject) => {



  if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
  
    resolve("Fried Rice");
  }
  
  else {
    //promise is rejected.
    reject("Something missing from the bucket");
  }
})



friedRice.then((myfriedRice) => {
  console.log("lets eat ",myfriedRice)
}).catch((error) => {
  console.log(error);
})


//now here i will add a set timeout function.

//as we know settime out is a async function and it takes a callback function as a parameter.

setTimeout(() => {
  console.log("hello from set timout")
},0)



for (let i = 0; i <= 100; i++){
  console.log(Math.random(), i);
}

console.log("Script end !");

// Now guess the output of this complete code until here so you'll find. that the output is

// script start (ye print hoga console sabse pehle mein)

// fir uske baad jo bhi array hai wo  memory mein store ho jayega , fir jo promise object hai wo create hoga
// fir promise ko consume karna hai to uske liye  browser will take the promise (promise.then wali jo line hai)

// par output console mein abhi tak sirf script start hi likha hoga.
//fir uske baad settime out function jo ki ek async function hai to ise bhi browser hi handle karega and after 0 milli sec callback will execute but as it is a async function to iska callback abhi execute nahi hoga it will store in callback queue .

// fir uske baad for loop execute hoga in global execution context to console mein numbers print hone start ho jayega fir uske baad , Script end print hoga aur fir last mein promise jo resolve hoga wo print hoga console mein .

// Important.

//Now jab bhi promise consume hota hai that is promise.then() so this then() function is stored  in microtask queue.


//now in callback queue we have callback function of settimeout function and in microtask queue we have promise.then() function to pehle kaun execute hoga ab, so always remember the function in microtask queue have higher priority then functions stored in callback queue, So final output will be.

/* 
script start
for loop will print the random numbers here.
 Script end !
 lets eat  Fried Rice
 hello from set timout
*/




