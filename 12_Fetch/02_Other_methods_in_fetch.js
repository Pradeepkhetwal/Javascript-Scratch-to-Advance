const URL = "https://jsonplaceholder.typicode.com/posts";

//now andar jo concept hai like handling promise is same the only minor change here while make the get request is the we need to additionaly pass an extra parameter in the form of an object inside the fetch();

//here method:'POST' specifies we want to make post request(it can be any request of your choice by default it is get so in get request you don't explicitly define this extra parameter which we are passing here), baki method mein jo bhi request define karoge wahi hogi all are same.


//As we are making a post request so we have to send data to the server or we can say we will create a new data in the server.
// so The body property below is used to send the data you want to include in the request.
//json.stringify function is used to convert the data which we are sending into json format because in post method server is most likely to accept the data in the json format.

//Headers are used to  provide additional metadata about the request.
/* 'Content-type': 'application/json; charset=UTF-8' tells the server that the request body is in JSON format and uses UTF-8 encoding.

Content-type: Describes the type of content you're sending. Here, it's indicating that the body of the request is JSON (application/json).

charset=UTF-8: This specifies that the character encoding for the request body is UTF-8, which is the standard for encoding text.
*/


fetch(URL, {
  method: 'POST',
  body: JSON.stringify({
    //this is the data that we are sending.
    title: 'foo',
    body: 'bar',
    userId:1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(response => {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Something went wrong");
  }
}).then(data => {
  console.log(data);
}).catch(error => {
  console.log("inside catch");
  console.log(error);
})