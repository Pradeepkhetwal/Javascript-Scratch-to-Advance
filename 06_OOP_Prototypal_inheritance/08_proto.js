
const obj1 = {
  key1: "value",
  key2:"value2"
}

//this way we have created an empty object obj2 with proto obj1.
const obj2 = Object.create(obj1);

//setting a key for obj2.
obj2.key3 = "value3";


//dekho obj2 does not have key1 so as it's proto is obj1 so js will search key1 in obj1 so obj1 has key1 hence "value" will be printed.
console.log(obj2.key1);

//proto basically refer ya fir object chaining k purpose se use hota hai.
//below will print key value pairs of obj1.
//in js documentation proto is written as [[prototype]].
console.log(obj2.__proto__);