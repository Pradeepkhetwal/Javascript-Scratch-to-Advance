//khali object hum aese bana skte hai const user = Object.create(userMethods);



const userMethod = {

  //creating about function here
  about: function() {
    console.log(`${this.firstName}`);
  }
}



function createUser(firstName, lastName, email, age) {
  //main change yaha pe kiya hai.
  //ab humne user ka proto set kar diya hai userMethods objects k saath means jo bhi user object k pass nahi hoga wo userMethods se dudh lega.
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;

  user.about = userMethod.about;
  return user;
}

const user1 = createUser("abc", "xyz", "@123", 44);
const user2 = createUser("abcef", "x4yz", "@1233", 44);

console.log(user1);
user1.about();
user2.about();

