//Booleans & comparisions operator.

let num1 = 5;
let num2 = 5;
console.log(num1 > num2);//false dega.

//  == vs ===

let num3 = "5";
let num4 = 5;
console.log(num3 == num4);//it will return true.
console.log(num3 === num4)//it will return false as it strictly checks also the type of variable as well as num3 is string and num4 is number.


//!= vs !==

console.log(num3 != num4); //this will return false.

console.log(num3 !== num4)//this will return true.


//Truthy and Falsy values.

//falsy values.

// false
// ""
// null
// undefined
// 0


//truthy values.
// "abc"
// 1,-1


//Ternary operator.

let age = 8;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink)//will print coffee


// and or operator.

let firstName = "Pradeep";
let num = 22;

if (firstName[0] == 'P' && num > 10) {
  console.log("ok");
}

if (firstName[0] = 'j' || num > 10) {
  console.log("ok");
}
