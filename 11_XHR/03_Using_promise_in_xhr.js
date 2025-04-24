// in previous code we have used callbacks now here we will promisify it means instead of callback we will use promises.

const URL = "https://jsonplaceholder.typicode.com/posts"

//we will create a function which will return a function that will return a promise and that promise will have the logic for making api calls.

/*

Here's the flow:

sendRequest() is called.

Inside it, a new XMLHttpRequest is created.

You configure the request with xhr.open().

You set up what to do when the response comes back (onload and onerror).

You call xhr.send(), and the request goes out to the server.

Eventually the response comes, and the browser runs the onload or onerror callback.

*/
function sendRequest(method, url){
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        //promise jab resolve hoga to response dega .
        resolve(xhr.response);
      
      }
      else {
        reject(new Error("something went wrong"))
      }
      //network error ayegi to ye function run hoga.
      xhr.onerror = function () {
        reject(new Error("Something went wrong"));
      }
    }

    xhr.send();
  })
}

//dekho jab sendRequest ko hum call karenge to ye function ek promise return karega jisko hum yahi par handle kar rahe hai using then.
//aur jab bhi promise resolve hoga to reponse dega as you can see above in sendRequest function we have passed the reponse in the resolve method. 
sendRequest("GET",URL).then(response=>{
  const data = JSON.parse(response);
  // ye jo data return ho ra it is a promise jiski resolve value is data. so we will handle it with then again ( whai ho ra hai yar then chaining).
  // Anything we retunr inside .then() is wrapped inside a promise.
  // Anything you return inside .then() becomes the resolved value of the next Promise in the chain.
  return data;
}).then(data => {
  const id = data[3].id;
  return id;
}).then(id => {
  const url = `${URL}/${id}`;
  return sendRequest("GET", url);
}).then(newrespone => {
    const newData = JSON.parse(newrespone);
    console.log(newData);
  }).catch(error => {
    console.log(error);
  })


  //dekho ye promise wahi same kaam kar rahe hai jo ki we did in previous code file.