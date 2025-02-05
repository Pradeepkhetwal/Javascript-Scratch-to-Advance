//rest parameter.

function myFunc(a, b, c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}

//now if we want to pass many parameters like this.

//myFunc(3,4,5,7,8,9,9,3);

//here we want value of a = 3
// value of b = 4.
// and rest values will be stored in c in the form of array.

//so for this we can use ...

function myFunc1(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is`, c);
}

myFunc1(1, 2, 3, 4, 5, 6, 7, 8, 9);

//function to add all parameters.

function addAll(...numbers) {
  let ans = 0;
  for (let n of numbers) {
    ans = ans + n;
  }
  return ans;
}

const ans = addAll(1, 3, 5, 6, 77, 3);
console.log(ans);