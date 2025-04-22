//parameter destructuring .
//object.


const person = {
  firstName: "pradeep",
  gender:"male"
}

// function printDetails(obj){
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }


//look as we know ki parameter mein object ayega to simply hum log {} ka use karke uss object ko destructure kar sakte hai fir hume . operator ka use nahi karna padega as we did in above function .
// here while destructuring the name should be same as of object keys.
// here while destructuring the name should be same as of object keys.
function printDetails({ firstName, gender }) {
  console.log(firstName);
  console.log(gender);

}

printDetails(person);