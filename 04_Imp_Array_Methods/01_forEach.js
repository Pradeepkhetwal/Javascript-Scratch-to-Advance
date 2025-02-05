//foreach.

const numbers = [1, 2, 3, 4, 5];
//for each loop khud leke ayega number and index from each iteration.
numbers.forEach(function (number, index){
  console.log(number * 3, index);
})

//in case of array of object

const users = [
  {firstName:"pradeep",age:20},
  {firstName:"sadeep",age:22},
  {firstName:"abc",age:24},
  { firstName: "xyz", age: 26 },
]

//will iterate through every object in the array.

//for each k andar jo humne function pass kiya hai that is a anonymous function as it don't have any name and it is serving as a callback method.
users.forEach(function (user) {
  console.log(user.firstName);
})


//passing arrow function. For each index to dega hi dega agar loge to.

users.forEach((user,index) => {
  console.log(user.firstName,index);
})
