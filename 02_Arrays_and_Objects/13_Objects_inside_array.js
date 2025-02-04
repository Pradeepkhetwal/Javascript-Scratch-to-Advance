//objects inside array.
//very useful in real world application.

const users = [
  {userId:1,firstName:"Pradeep",gender:"male"},
  {userId:2,firstName:"Shivi",gender:"female"}
]

//har object ko iterate karega
for (let user of users) {
  console.log(user);
}

//har object ka firstname dega
for (let user of users) {
  console.log(user.firstName);
}

