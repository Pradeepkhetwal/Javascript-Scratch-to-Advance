//new keyword.

function createUser(firstName, age){
  this.firstName = firstName;
  this.age = age;

}

const user = new createUser("pradeep", 6);
createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
}

//new keyword will create
//1. empty object this ={}
//2. return this
//3. khud se hi proto ko prototype se set kar dega means  Object.create(createUser.prototype) ye kaam khud se hi kar dega

console.log(user);
