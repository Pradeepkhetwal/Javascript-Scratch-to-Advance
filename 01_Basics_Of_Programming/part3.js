//undefined. Agar variable banaya aur kuch bhi value usse assign nahi ki  to uss variable ka type will be undefined.

let age;

console.log(typeof age);

let myVariable = null;
console.log(myVariable);//this will print null.
console.log(typeof myVariable);//this will print object.So this is a bug in JS isko null dena tha par ye object deta hai.

//BigInt datatype.

let myNumber = BigInt(1231234556);
let n = 132n;//last mein n likhne se ye bhi bigint ban gya hai.
console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER); this will give the limit of storing an integer in a variable.


// We cannot add bigint + int ok.
//We can add bigint + bigint.

console.log(myNumber + n);