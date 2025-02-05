//filter method.

const numbers = [1, 2, 3, 4, 7, 9];

const isEven = function (num) {
  return num % 2 == 0;
}
//filter method also returns an array. now filter method will give every number from numbers array to this isEven function and when isEven will return true then that number will be added to the evenNumber Array.
const evenNumber = numbers.filter(isEven);
console.log(evenNumber);

//here above isEven we passed is an callback function so we can declare it inside the filter function like this also,here i am changing the function ok taki error na aye.

const oddNumberArray = numbers.filter((number) => {
  return number % 2 != 0;
})

console.log(oddNumberArray);