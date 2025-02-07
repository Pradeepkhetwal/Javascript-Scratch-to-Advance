//jin methods ko call karne k liye we don't require object we call them as static methods.

class Person{
  
  static classInfo() {
    console.log("hello this is person class");
  }
}

const person1 = new Person();
//we don't need object to call classinfo() method here we can directly call it by class itself like this below.
const info = Person.classInfo();
console.log(info);
//this will also print hello this is person class
console.log(Person.classInfo());


//calling static method by object will give error.
// person1.classInfo();
