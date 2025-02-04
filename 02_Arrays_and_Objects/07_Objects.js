//objects store key value pairs.
//objects don't have index.
//object is a reference type .

//how to create object. Here we use curley brackets inside of which we have key value pairs.

const person = { name: "pradeep", age: 22 };


//we can also create object like this

const object2 = {
  name: "harshit",
  age: 22,
  hobbies:["guitar","dancing"]
}


//it will print object
console.log(typeof person);

//how to access data from object

console.log(person.name);
console.log(person.age);

console.log(person.hobbies);


//how to add new key value pari to objects.
//we have added key gender and value male to person object
person.gender = "male";
console.log(person);
//we can add key value pair  like this as well. This is bracket notation.
person["salary"] = 20000;


//note we can access data from objects like this also, key is string in javascript so we have written name inside double quotes.
console.log(person["name"]);
console.log(person["age"]);

console.log(person);