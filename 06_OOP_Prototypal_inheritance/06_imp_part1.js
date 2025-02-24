const user = {
  fisrtName: "Pradeep",
  lastName: "khetwal",
  email:"pradeepkhetwal077@gmail.com",
  age: 2,
  about: function () {
    return `${this.fisrtName}`
  }
}


//suppose we want to create thousands of object with these above keys but we want their different values.

// so we can create a function for the above requirement. This function will return object.

function createUser(firstName, lastName, email, age) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.about = function () {
    return  `${this.firstName}`
  }

  return user;
}

const user1 = createUser("abc", "xyz", "@123", 44);

console.log(user1);
user1.about();

//this above function works good but it has many limitations.

//look each time we create a object using createUser function for each object we have about function means if we create 1000 objects then we will have 1000 about functions in the memory this is poor memory management we can solve this by . Please move to next part i.e part2.js

