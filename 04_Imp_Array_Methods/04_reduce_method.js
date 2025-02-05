//reduce method.

const numbers = [1, 3, 5, 6, 8];

// reduce method also takes callback method as parameter.

//here we are directly passing arrow function as callback function


//below we are using reduce method to find the sum of all the number in the numbers array.


// sabse pehle ac =1 and currentValue = 2. it will return 3.
//now in the 2nd iteration ac will have the value jo ki pehle return hui thi i.e 3
//so ac = 3 and current value will be 3 return 6

// ac         , current value , return
//1                2             3
//3                3             6
//6                4             10
//10               5             15
//15               10            25

//so answer will be 25.
const sum = numbers.reduce((ac, currentValue) => { return ac + currentValue });

//now lets understand reduce function more.


//note we can pass initial value of ac like this. Here ac will have initial value 100 and currentvalue will have value 1 i.e the first element of the numbers array.

// const sum = numbers.reduce((ac, currentValue) => {
//   return ac + currentValue;
// }, 100);




//consider an array of objects
const userCart = [
  {productId:1,productName:"mobile",price:12000},
  { productId: 2, productName: "Laptop", price: 22000 },
  {
    productId: 3, productName: "fridge", price: 44400
  }
]

const totalamount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0)

console.log(totalamount);