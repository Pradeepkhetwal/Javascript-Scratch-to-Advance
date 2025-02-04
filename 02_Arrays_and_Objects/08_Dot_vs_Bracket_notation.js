const person ={
  name:"pradeep",
  age:22,
  hobbies: ["videogames", "sports", "listening Music"],
  "this is a key with space ":22
}

//to write a key with space use double inverted comas as used in above.

//to access the above we have
console.log(person["this is a key with space "]);

//now if we have a vairable key aur jo bhi usse assigned hai we have to make it a key inside the person object so we can do this by using that key  variable as.

let key = "email";

person[key] = "pradeepkhetwal077@gmai.com";
//so email will be added as key to person object with the value pradeepkhetwal077@gmai.com
console.log(person);