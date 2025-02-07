//methods.
//methods are function inside object.


//this refers to the current object.
const person = {
  firstName: "pradeep",
  age: 8,
  about: function () {
    console.log(`This is about person whose name is ${this.firstName}`);
  }
}

person.about();