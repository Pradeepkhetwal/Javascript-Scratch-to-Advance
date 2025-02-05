//sorting method.

const numbers = [1, 3, 6, 2, 299];

//sort method changes the original array.
//now you will notice ki below sort method ne elements ko sort nahi kiya randomly sort kar diya hai bcoz in javascript , javascript in numbers ko as a string dekhti hai and based on the Assci values of these , they are sorted.

//now ascii value of 1 is 49 same goes for other number , now for 299 just see what is the ascii value of 2 is 50 we can ignore remaining numbers i.e 99 , to javascript will arrange in ascending ording based on these ascii values . 



// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125



numbers.sort();
console.log(numbers);


//alphabets directly dictionary order mein ho jate hai , but uppercase letter ko phele sort karta hai.

//for ex = "a", "e", "c","Egg"
//after sorting = Egg, a, c, e.

//so how to sort numbers based on numbers itself.

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });


//sort can take callback functin now if in the above function if b-a is positive then a is smaller to a pehle ayega and if b-a is negative means b is smaller to b pehle ayega, for all a,b belongs to numbers array.

const products = [
  {productId: 1, produceName: "p1",price: 300 },
  {productId: 2, produceName: "p2",price: 3000 },
  {productId: 3, produceName: "p3",price: 200 },
  {productId: 4, produceName: "p4",price: 8000 },
  {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh here slice is used to clone products to constant lowToHigh if we don't use slice original products array mein changes aa ajayenge.
const lowToHigh = products.slice(0).sort((a,b)=>{
  return a.price-b.price
});

const highToLow = products.slice(0).sort((a,b)=>{
  return b.price-a.price;
});



const users = [
  {firstName: "harshit", age: 23},
  {firstName: "mohit", age: 21},
  {firstName: "nitish", age: 22},
  {firstName: "garima", age: 20},
]


users.sort((a,b)=>{
  if(a.firstName > b.firstName){
      return 1;
  }else{
      return -1;
  }
});

console.log(users);