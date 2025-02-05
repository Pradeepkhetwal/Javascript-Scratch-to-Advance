//fill method.


// suppose we want to create an array of length 10 with all elements as -1.for that we can use fill method as below.

const myArray = new Array(10).fill(-1);
console.log(myArray);

//supppose we have an array.
const mineArray = [1, 2, 3, 4, 5, 6, 7, 8];

//let say we wan't to change 3,4, with 0 so for that we can use the fill method as.

//parameters are .
// value , startindex , endindex(last index will be excluded)
mineArray.fill(0, 2, 4);
console.log(mineArray);


