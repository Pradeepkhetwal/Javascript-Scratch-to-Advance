//sets are also iterables.
//sets store data.
// sets also have its own methods.
// No index-based access in sets.
//Here order is not guranteed.
//unqiue items only (no duplicate items allowed)


//now if want to store numbers in a set we can write this.


//inside this parenthesis we can pass any iterable.
const numbers = new Set([1, 2, 3, 3]);
//3 ek hi baar ayega in set numbers
console.log(numbers);

//we can't do this .It will give undefined.
// console.log(numbers[0]);

// we also add elements in set as.
//here s is set .
const s = new Set();
s.add(1);
s.add(2);

const items = ['items', 'items2'];
//adding array to set.
s.add(items);

console.log(s);


//methos of set.

//has method use to check if there exist a item in set or not.


if (s.has(1)) {
  console.log("hai");
}
else {
  console.log("nahi hai");
}


//as set is iterable we can use for of loop like this.
for (let x of numbers) {
  console.log(x);
}


const Array = [1, 3, 4, 4, 58, 8];
//suppose we want unique elements from above array.

//so we can do it with the help of set as.

const unique = new Set(Array);
console.log(unique);

