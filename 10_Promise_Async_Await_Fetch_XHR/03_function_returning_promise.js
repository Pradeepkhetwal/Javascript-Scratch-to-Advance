// here we will create a function returning a promise.

//here we have created a function named ricePromise.
function ricePromise() {
  const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
  return new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
  
      resolve("Fried Rice");
    }
    
    else {
      //promise is rejected.
      reject("Something missing from the bucket");
    }
})
}

//now we will consume the promse returned by this function as first we will have to call this function and it will return the promise and in that promise we will apply then function as below.

ricePromise().then(
  (myfriedRice) => {
    console.log("lets eat ", myfriedRice);

  }
).catch((error) => {
  console.log(error);
});



