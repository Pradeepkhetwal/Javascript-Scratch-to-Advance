//here we will create an object containing methods that are to be involved in the objects that we will create using createUser function.

const userMethod = {

  //creating about function here
  about: function() {
    console.log(`${this.firstName}`);
  }
}


//now with this memory will be saved as each time we create an object only the reference of the function will be copied .

function createUser(firstName, lastName, email, age) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  //copying about method reference to user.about
  user.about = userMethod.about;
  return user;
}

const user1 = createUser("abc", "xyz", "@123", 44);
const user2 = createUser("abcef", "x4yz", "@1233", 44);

console.log(user1);
user1.about();
user2.about();

//now still we have some issue here which is that for that first read 08_proto.js