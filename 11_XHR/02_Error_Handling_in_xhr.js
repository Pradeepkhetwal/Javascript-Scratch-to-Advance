//now here we will do error handling while receiving the response agar koi bhi error aa jati hai to we need to handle it .


const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {

  //status code which are in 200's represent successfull response.
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response)
    console.log(data)

    //dekho in reponse we will get the data in json format , suppose from that we want to access a particular object so data[3] karke we will get complete object at index 3 and with dot operator we can access the id of that object so here in below id is storing the id of the object which is at index 3 in the json data.
    const id = data[3].id;

      //dekho hota kya hai na ki jab we make request in the url mentioned above we get all the data if we want a single object data we can easily get it by calling at the route url/id here id is the id of the object jsika data we need in the reponse so to make a new api call we will create a new xhr object named as xhr2.
    const xhr2 = new XMLHttpRequest();

    //new url.
    const URL2 = `${URL}/${id}`

    console.log(URL2)
    xhr2.open("GET", URL2);
    xhr2.onload = () => {
      const data2 = JSON.parse(xhr2.response)
      
    }
    xhr2.send();
  }

  //agar response mein status 200 k aage jayega to means kuch to gadbad hai to ye else run ho jayega.
  else {
    console.log("Something went wrong");
  }
}

//dekho agar network error aati hai to upar jo onload functin likha hai wo run hi ni hoga because without internet we will not be able to make api call aur we will also don't know that what is the error so for that we have a property in xhr object called as onerror so this will run the callback function in case there is any network error like no internet and all.
xhr.onerror = () => {
  console.log("network error");
}