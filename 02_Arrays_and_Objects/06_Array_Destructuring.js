//arrray destructuring.

// const myArray = ["value1", "value2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);


//above ko karne k liye we can write like this.

let [myvar1, myvar2] = myArray;

//first index of myArray will store in myvar1 variable, and dusra element will store in myvar2. We can also use const instead of let but fir myvar1,myvar2 ki value change nahi hogi.

//if we do like this.
//let [myvar1,,myvar2] this will skip 2nd element and will store 3rd element of the array in myvar2 element.

//if we do like this
//[myvar1,myvar2,...myNewArray] = myArray;
//rest values after second element if any persent in myArray will be stored in myNewArray , it will be an array which will be created and will store the remaining elements of myArray.