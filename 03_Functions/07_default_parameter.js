//default parameter.

function addTwo(a, b) {
  return a + b;
}

// if we don't pass value of b it will become undefined so output mein Nan ayega.
const ans = addTwo(2);
console.log(ans);


//To remove above problem we can set default value using = .

function sum(a, b = 0) {
  return a + b;
}

//it will take value of b = 0 and a = 2 so output will be 2.
const val = sum(2);
console.log(val);