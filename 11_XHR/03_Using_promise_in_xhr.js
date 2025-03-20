// in previous code we have used callbacks now here we will promisify it means instead of callback we will use promises.

const URL = "https://jsonplaceholder.typicode.com/posts"

//we will create a function which will return a function that will return a promise and that promise will have the logic for making api calls.
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

//dekho jab send request ko hum call karenge to ye function ek promise return karega jisko hum yahi par handle kar rahe hai using then.
//aur jab bhi promise resolve hoga to reponse dega as you can see above in sendRequest function we have passed the reponse in the resolve method. 
sendRequest("GET",URL).then(response=>{
  const data = JSON.parse(response);
  // ye jo data return ho ra it is a promise jiski resolve value is data. so we will handle it with then again ( whai ho ra hai yar then chaining).
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