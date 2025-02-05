//map method.

const numbers = [3, 4, 5, 1, 8];


//map functions returns an array.

const square = function (number) {
  return number * number;
}


//here we are using map function over numbers array and we are passing square (callback method to it) so for every element in number array map will pass it as argument to square function and the result square function will be stored in an array.

const squareNumberArray = numbers.map(square);

console.log(squareNumberArray);

//directly callback ko inside map parenthesis bhi pass kara skte hai.


//yaha par as a callback function we have an arrow function jisme map khud se hi parameter ki values degar at every iteration. Now each number , index pair are stored in squareNumber.(array)
const squareNumber = numbers.map((number, index) => {
 return `${index}, ${number}`
})

console.log(squareNumber);
