//here now in this code we will use new keyword.

function createUser(firstName, lastName, email, age) {
  //by using new keyword this below line can be commented easily.
  // const user = Object.create(createUser.prototype);
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;

 //khud se hi return kar deta hai bcoz of using new keyword.
  // return user;r
}

createUser.prototype.about = function () {
  console.log(`${this.firstName}`);
};


const user1 = new createUser("abc", "xyz", "@123", 44);
const user2 = new createUser("abcef", "x4yz", "@1233", 44);

console.log(user1);
user1.about();
user2.about();

// Note =: there is a convention in js followed by developers ki if any function is to be called by new keyword then it must start with capital letter here createUser ka c capital hona chahiye maine nahi kiya hai aage jake karenge.


//if we do this .
//this will give keys of prototype as well
// for (let key in user1) {
//   console.log(key);
// }

// but if we want keys of only user1 then we can write

for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
