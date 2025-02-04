//for loop in array.


let fruits = ["apple", "banana", "orange"];

console.log(fruits.length);


for (let i = 0; i <= fruits.length - 1; i++){
  console.log(fruits[i].toUpperCase());
}


//Using const for arrays.

//a is storing the address of the memory location in the heap where array 'a' is stored.
const a = ["hello", "there"];

//this will not give error as we are not changing the address stored in a .
a.push("element 4");
console.log(a);

//this will give error as here address stored in a is going to change.constant use kiya so that's why we are getting this error.Agar let use karte to nahi aati ye error.
// a = [];


//for of loop in array.
for (let x of fruits) {
  console.log(x);
}

//for in loop in array
//this give index from starting to end index.
for (let i in fruits) {
  console.log(fruits[i]);
}