
//Array is a reference type in js.

// Why arrays are called reference type in JS?
// When you create an array in JavaScript, it is stored as an object in memory. If you assign that array to another variable, the new variable will hold a reference to the same array, not a copy of the array itself. This means that if you modify the array through one variable, the change will be reflected when accessing it through the other variable, because both variables point to the same array in memory.

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

console.log(Array.isArray(fruits));//returns true.
console.log(Array.isArray(obj));//returns false.









