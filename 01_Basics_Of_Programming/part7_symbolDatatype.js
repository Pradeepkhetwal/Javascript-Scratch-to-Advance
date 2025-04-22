// Here we will study symbol datatype.

// Symbols are used to create unique, immutable identifiers for object properties, preventing name collisions and enabling hidden or private properties.

// You can create a Symbol using the Symbol() function.

// When you create a Symbol, you can optionally pass a description (a string) to help you identify or describe the Symbol. This description is not used for uniqueness — it’s just a label for you, and it doesn't affect the Symbol's behavior.


const a = Symbol();
const b = Symbol();

console.log(typeof a);
console.log(a)
console.log(b)

// Here no description is passed so it will print undefined.
console.log(a.description);
// It will return false as 2 symbols are always unique.
console.log(a == b);


// creating symbol with description.

const c = Symbol("naam");
const d = Symbol("naam");

console.log(c)
console.log(d)

// we can print the description, it will print naam.
console.log(c.description);
console.log(d.description);

// It will return false as 2 symbols are always unique.
console.log(c == d);