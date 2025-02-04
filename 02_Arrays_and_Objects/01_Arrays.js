
//Array is a reference type.
//Every reference type is an object.
let fruits = ["apple", "mango", "orange"];

console.log(fruits);//print all fruits.
console.log(fruits[0]);//print apple.


//It will change the original array as arrays are mutable.
fruits[0] = "banana";

//typeof
console.log(typeof fruits);//it will give objects.

let obj = {};//we have created an object literal.
console.log(typeof obj)//prints object

// To check for an container to be array or not we have this method.

console.log(Array.isArray(fruits));//returns true
console.log(Array.isArray(obj));//returns false.









