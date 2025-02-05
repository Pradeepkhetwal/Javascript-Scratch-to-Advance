//every method.
const numbers = [3, 2, 5, 9, 19];

//if we need to check if all the elements in the array are even so for that we can use every method.

const ans = numbers.every((number) => number % 2 === 0)

//every method also return boolean (true or false). It will return true when for all elements condition will be true. else false

console.log(ans);

//check every product <200000.

const userCart = [
  {
    productId: 1, price: 12000
  },
  {
    productId: 2, price: 22000
  },
  {
    productId: 3, price: 112000
  },
  {
    productId: 4, price: 32000
  }
]

const result = userCart.every((cartitem) => cartitem.price < 200000);

console.log(result);