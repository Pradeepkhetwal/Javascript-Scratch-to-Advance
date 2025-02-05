//find method


const myArray = ["ello", "at", "lino", "cat"];

//find method also takes callback function.It will pass each element from myArray to callbackmethod.

//ye sirf uss element ko return karega jis first element k liye true ayega in callback function.Ek hi element return karega.

//here it will return the first element whose length is 2.

const ans = myArray.find((string) => {
  if (string.length == 2) {
    return true;
  }
  else {
    return false;
  }
})

console.log(ans);


//using with objects.

const users = [
  { id: 1, name: "pradeep" },
  { id: 2, name: "rahul" },
  { id: 3, name: "abc" }
];


//will return the user with id = 3
const myUser = users.find((user) => {
  return user.id == 3;
});

console.log(myUser);