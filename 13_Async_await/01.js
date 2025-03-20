//dekho previously lectures mein in fetch hum jo .then .then use karre the usse bhi hum remove kar skte hai using async await we will learn it here.(kaam wahi ho ra hoga backend mein jo fetch mein kiya tha bass syntax change ho jayega.)


const URL = "https://jsonplaceholder.typicode.com/posts";


//here we have made an aync function named getPosts() an async function always returns a promise.

//now this async function will be handled by the browser so asynchronously run hoga ye bhi.


console.log("script starts");

async function getPosts() {

  //fetch will return a promise so we have used await keyword which means jab tak promise returned by fetch so to resolve ya to reject nahi ho jata tab tak wait karo . And either we get response or rejection we have stored it in a const named response.

  //now as you know fetch jo bhi promise return karta hai uski resolve value ek respone object hota hai not the response data. so it has many properties.
  const response = await fetch(URL);


  //to isme bhi wahi hai error ayegi to neeche jo catch block hai wo run nahi hoga so for that hume error handling karni padegi using response.ok (you know tumne pada hai ye in 12_Fetch mein) Aur yaha bhi same hai ki jab network error ayega to tabhi catch run hoga automatically baki cases mein ye manual jo hum error throw karre hai uske baad hi run hoga.
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  //Now ye json method bhi ek promies return karta hai to again we can use await here. And this data is also carrying the actual response data.
  const data = await response.json();

  //Here the  data is a promise now not the actual response data. So we will have to use then statement to handle this promise while calling this getPosts function.
  return data;
}

//below console.log(data) will not print the response data as here 'data' is a promise. so we can't console it so we have to use then() while handling the promise returned by getPosts function in order to get the response.

// console.log(data);



getPosts().then((mydata) => {
  console.log(mydata);
}).catch(error => {
  console.log("inside catch")
  console.log(error);
})

console.log("Script end");

//now in output you'll se sabse pehle script start print hoga fir script end print hoga and finally humara response data this shows asynchronously run hota hai async function.


