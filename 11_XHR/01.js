//at first we will create xhr object using XHLHttpRequest()

const xhr = new XMLHttpRequest();

//we will get xhr object in console and we can see the properties of this object in console as well.
console.log(xhr);

//now with the help of this xhr object we have to make http request ot the server.

// we can make server by ourselves or we can also use already create servers(i.e bani banayi api's)so here we will use this bani banayi api's. So for that write jsontypicode in google and the first link we get will be https://jsonplaceholder.typicode.com/ so we will use this . here you will se routes are defined with the end point you will get json data on clicking them (as a response).

// so let say we are calling the route https://jsonplaceholder.typicode.com/posts so let us store it in a variable first.

const URL = "https://jsonplaceholder.typicode.com/posts"

//now we have multiple properties in this xhr object.
console.log(xhr.readyState);
// The xhr.open() function is used in AJAX to configure a request before sending it to the server. It has the following parameters 1. type of request being made, 2. url of the location where the request is made.
xhr.open("GET", URL);

//readyState property -: The xhr.readyState property is used in the XMLHttpRequest (XHR) object to track the state of the request as it progresses through various stages of the HTTP request lifecycle. Means Initally jab XHR object create hota hai to uski readystate value is 0 , then when we call the open function it becomes 1 and so on the value increases and finally 4 means the request is completed.

/*0 (UNSENT):

The XMLHttpRequest object has been created, but the open() method has not yet been called. The request is not yet initialized.
1 (OPENED):
The open() method has been called, but the request has not yet been sent. The connection to the server is established, but no data has been sent.

2 (HEADERS_RECEIVED):
The request has been sent, and the response headers have been received from the server. The body of the response is still being received.

3 (LOADING):
The response body is being received. The request is still in progress, and data is being loaded from the server.

4 (DONE):
The request is complete, and the response is fully received. This is the final state when the data can be processed. The request has either been successfully completed or failed. */
console.log(xhr.readyState);

//now with this onreadystatechange property jab bhi state change hogi tab tab ye function run hoga that we have written in the right side. Now humne function k andar code aese likha hai ki jab state 4 hogi tabhi ye function work karega. warna call to har baar hoga jab bhi state change hogi.
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {

    //repsone property bascially returns the reponse that is recevied after making the request. so we have stored that response in a constant repsone.
    const response = xhr.response;
    //the response is received as string so we will convert it into object by below JSON.parse function.
    console.log(typeof response);
    const data = JSON.parse(response);
    console.log(typeof data);
  }
}

//now jo ye upar function likha hai iske badle we can use the onload property because onload runs only when the readystate is 4.

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
}
// The xhr.send() method is used to send the HTTP request that you have prepared using the XMLHttpRequest (XHR) object.

// Note all these properties are handled by browser so these all are asynchronously running .
xhr.send();