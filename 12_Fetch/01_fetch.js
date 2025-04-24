//fetch is also used to make api calls.

// It is the new way of making api calls.

const URL = "https://jsonplaceholder.typicode.com/posts";

//fetch k andar we need to pass the url (jaha humne api call karni hai).

//fetch by default get request karta hai .

//fetch hamesha promise return karta hai means we can directly use then with it.

//ab jo ye promise return hota hai agar tum iske response ko directly print karte ho like console.log(response) to you will not get the response data directly instead tumhe ek response object milega with lot of properties so ab iss object mein se actual data ko pane k liye we have .json() function jo ki response data de deta hai in json format.

//agar fetch resolve hoga to then chalega. par fetch sirf network error ane par hi reject hota hai.
// which means ki agar server error like in 500 codes or client error like in 400's code to uss case mein fetch reject nahi hota hai to catch block run hi ni hota , wo sirf network error ane pe hi run hota hai.

//so to resolve it we have a property in the response object that is response.ok ab iski value true hoti hai jab sab theek ho aur agar koi error aa jati hai to us case mein iski value false ho jati hai so isi ko use karenge hum , jaise hi iski value false hai means there is some error or mistake and we will thow an error and due to this throwing of error catch block bhi run ho jayega.

fetch(URL).then(response => {
  // console.log("Hello");
  // console.log(response);
  // console.log(typeof response);

  
  if (response.ok) {
    //this is also a promise whose resolve value is response.json(it is the acutal data);
    //The response.json() method reads the body of the response and parses it as JSON.
    // That reading and parsing takes time (especially if the response body is large).
    // So, to handle this delay, response.json() returns a Promise that resolves with the parsed JSON data
    return response.json();
  } else {
    throw new Error("Something error");
  }
}).then(data => {
  console.log(data);
}).catch(error => {
  console.log("inside catch");
  console.log(error);
})