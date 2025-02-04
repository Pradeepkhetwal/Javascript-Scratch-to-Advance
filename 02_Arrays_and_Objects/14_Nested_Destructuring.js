const users = [
  {userId : 1, name:"pradeep",gender:"male"},
  {userId : 2, name:"abc",gender:"male"},
  {userId : 3, name:"xyz",gender:"male"}
]

const [obj1, obj2, obj3] = users;

console.log(obj1);

//now destructuring dekho, object ki destructring karni hai to we will use curley brackets


//pehle object ka firstname chahiye and 2re ka kuch nahi aur third object ka gender.

//using : we can give or allot variable as we are storing name in Username variable. Gender k case mein directly kar diya tum samajh re ho tumne pada hai ye 
const [{name:Username}, , {gender}] = users;

console.log(Username);
console.log(gender);