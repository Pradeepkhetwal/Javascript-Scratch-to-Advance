//class

//classes are created using class keyword.

class CreateUser{
  //we create constructor by constructor keyword it will create object
  constructor(firstName, lastName, email, age) {
    console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;

    //ye khud hi object ko return kar dega no need to return manually.
  }

  //inside this class we can define methods as well.

  about() {
    console.log(`${this.firstName}`);
  }
}



//new keyword se constructor directly call hoga.


const user1 = new CreateUser("abc", "xyz", "@123", 44);
const user2 = new CreateUser("abcef", "x4yz", "@1233", 44);

console.log(user1);
user1.about();
user2.about();

//to check for a object prototype we have
console.log(Object.getPrototypeOf(user1));

