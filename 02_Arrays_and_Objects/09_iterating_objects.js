const person = {
  name: "pradeep",
  age: 22
}



for (let key in person) {
  console.log(person[key]);
  console.log(`${key}: ${person[key]}`);
}


//this Object.keys returns a array of keys
console.log(Object.keys(person));


