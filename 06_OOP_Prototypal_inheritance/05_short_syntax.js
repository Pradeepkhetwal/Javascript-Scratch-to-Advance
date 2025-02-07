// const user1 = {
//   firstName: "pradeep",
//   age: 8,
//   about: function(){
//     console.log(this.firstName, this.age)
//   }
// }


//both above is same as below. in objects functions can be directly defined.
const user1 = {
  firstName: "pradeep",
  age: 8,
  about() {
    console.log(this.firstName, this.age)
  }
}

user1.about();