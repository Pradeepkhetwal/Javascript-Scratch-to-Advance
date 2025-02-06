//iterables are those in which we can use for of loop.

// string and arrays are iterable.

const firstName = "Pradeep";

for (let char of firstName) {
  console.log(char);
}


//objects are not iterables.


//what are array like objects.
//Ans - : jinke pass length property hoti hai aur jinko hum index se access kar skte hai .For ex- string.

//for ex.

const a = "zyxs";
console.log(a.length);
console.log(a[0]);