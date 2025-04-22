// Variables
"use strict";
// Note bina var likhne par bhi variable create kar deta hai js same as python. So this can cause many errors while in big projects , so we can use strict mode by writing "use strict" on the top in the code and it will prevent us from many problems like it will throw error if in case we declare any variable without using let , char and const. and also in cases like we have variable or constants with same name. In using reseved keywords name as the name of the variable or constants.


var firstname = "This is a variable";

console.log(firstname);


//changing the value of variable.

firstname = "This is changed value of variable";

 firstname = "hello";
console.log(firstname);

var firstname = "go with teh "
console.log(firstname);


//We can use let instead of var to declare variable.

//90% time let se variable banate hai.
//var se variable ko multiple times declare kar sakte hai par let se nahi kar sakte.
//We will discuss the difference between var and let in further lectures.


//Constants
// Below as we are changing the value of pi to 1 it will give error.
// const pi = 2.15;
// pi = 1;
// console.log(pi);


// Strings.

let firstName = "Pradeep";
//This will print P.
console.log(firstName[0]);
console.log(firstName.length);
//to print last index character.
console.log(firstName[firstName.length - 1]);

//length mein space bhi count hote hai inside string i.e(inside double inverted comas);
let SecondName = "  Khetwal ";

//this will not alter the original string but will give a new string.
let newString = SecondName.trim();
console.log(SecondName);
console.log(newString);
console.log(newString.length);
console.log(SecondName.length);
// To upper case bhi nayi string deta hai does not alter original string. same tolowercase bhi work karta hai.
console.log(SecondName.toUpperCase());

//Slice

// Here inside slice we enter starting and ending index.
let slicedString = firstName.slice(1, 4);
console.log(slicedString);
