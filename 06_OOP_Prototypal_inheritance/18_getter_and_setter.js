//getter and setters.

class Person{
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //getter
  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
//setter
  set fullName(fullname) {
    const [firstName, lastName] = fullname.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("pradeep", "khetwal", 22);
console.log(person1);

//using getter
console.log(person1.fullName);

//using setter it will set the name to pradeep singh
person1.fullName = "pradeep singh ";


//using getter.
console.log(person1.fullName);



