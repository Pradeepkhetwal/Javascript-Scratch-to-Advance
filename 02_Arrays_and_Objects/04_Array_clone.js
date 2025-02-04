let array1 = ["item1", "item2"];
// let array2 = array1; we will not clone like this.

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);


//cloning the array.

// method 2.
// let array2 = array1.slice(0);

//new way.
//spread operator.
// let array2 = [...arrray1];

//to add extra elements in array2 we can also write as

// this will clone array1 and will push element intor array2.
// let array2 = array1.slice(0).concat(["element"]);

// using spread operator we can also do this will clone array1 and will push the below items.
// let array2 = [...array1, "item3", "item4"];

//if we have 2 arrays .
let oneMoreArray = ["element 1", "item2"];
//This will clone array1 and oneMoreArray to .
let array2 = [...array1, ...oneMoreArray];

console.log(array2);

