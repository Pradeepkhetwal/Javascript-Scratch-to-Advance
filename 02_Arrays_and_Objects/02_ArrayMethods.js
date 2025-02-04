// Array methods.

//push.

//this push methods push or insert element in the end of the array.

let fruits = ["apple", "banana"];
console.log(fruits);

fruits.push("Mango");
console.log(fruits);


//pop methods -: end element of the array of remove karta hai.
let popped = fruits.pop();
console.log(fruits);

console.log("popped fruit is ", popped);

//unshift -: array mein starting mein element ko add karne k liye.

fruits.unshift("Pineapple");

//shift-:to remove the first or starting element of the arrray.

console.log(fruits);
let remove = fruits.shift();
console.log("Removed element is ", remove);

//Pop and push are fast in comparision to unshift and shift . As in shift and unshift elements ko adjust bhi karna padega in the array.