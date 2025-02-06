//optional chaining.

const user = {
  firstName: "Pradeep",
  Rollnumber : 23
}

//In optional chaining we use ?. instead of . operator while accessing value of any key inside an object.

// user?.firstName means check if there exist user or not if not then do not proceed further if exist then check if it has firstName.

//if we directly use . operator and if there does not exist firstName key then it will give error .

console.log(user?.firstName);


