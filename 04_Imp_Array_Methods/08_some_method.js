//some method.

const numbers = [3, 4, 2, 99];

//it will check for the condition if there exist at least one.And will return true or false.

//we will check if there exist ek bhi number jo odd ho.Below will return true.

const res = numbers.some((num) => num % 2 != 0);

console.log(res);


//we will check if there exist any product whose price is greater than 500000
const userCart = [
  {
    productId: 1, price: 12000
  },
  {
    productId: 2, price: 22000
  },
  {
    productId: 3, price: 12000
  },
  {
    productId: 4, price: 32000
  }
]


const ans = userCart.some((item) => item.price > 50000);
//it will return false.
console.log(ans);