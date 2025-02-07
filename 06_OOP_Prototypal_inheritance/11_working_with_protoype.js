//dekho yaha bhi createUser function bhi to prototype dega to hum simply usi mein about function add kar dete hai khali userMethod object kyu create kare



// const userMethod = {

//   //creating about function here
//   about: function() {
//     console.log(`${this.firstName}`);
//   }
// }



function createUser(firstName, lastName, email, age) {
  //proto mein hume prototype object daalna padega for object linking
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;

 
  return user;
}

createUser.prototype.about = function () {
  console.log(`${this.firstName}`);
};


const user1 = createUser("abc", "xyz", "@123", 44);
const user2 = createUser("abcef", "x4yz", "@1233", 44);

console.log(user1);
user1.about();
user2.about();

