// type of operator .


let age = 22;
let firstName = "pradeep";

console.log(typeof age);//this will print number.

console.log(typeof "Hello")//this will print string


//Converting number to string.

// To convert number to string simply add an empty string to that number variable.
console.log(age = age + "");

console.log(typeof (age + ""));

//Convert string to number . Simpy + laga do before string.

let myAge = +"18"; //this is number 18 not string 18 now.age
console.log(typeof myAge);



//Second method to convert from string to number and number to string.

let a = 18;
a = String(a);
console.log(typeof a);

a = Number(a);
console.log(typeof a);


//String concatenation.

let string1 = "pradeep";
let string2 = "khetwal";

let fullName = string1 +" "+ string2;//adding a bit of space between pradeep and khetwal
console.log(fullName);



//template string.

let num = 22;
let naam = "Pradeep";

//Suppose i want to print my name is pradeep and my age is 22 so for this we can use template string using backticks.

let aboutMe = `my name is ${naam} and my age is ${num}`

console.log(aboutMe);
