// type of operator is used to tell the datatype of any container.

// Datatypes in js.

/*
  1. Primitive Data Types (Immutable)
These are the basic building blocks and are not objects. They hold a single value and are stored directly.


Type	      Example	                Description
String-:  	"hello"	              Textual data
Number-:  	42, 3.14              Integer or floating-point numbers
BigInt-:  	12345678901234567890n	For very large integers
Boolean-: 	true, false         	Logical value (yes/no)
Undefined-: undefined           	A variable declared but not assigned a value
Null-:	     null	                 Explicitly no value
Symbol-:  	Symbol('id')        	Unique and immutable value (used for keys)


2. Non-Primitive (Reference) Data Types
These are objects — complex types that can hold multiple values and are stored by reference.



Object	{ name: "John", age: 30 }	Collection of key-value pairs
Array	[1, 2, 3, 4]	List-like structure
Function	function greet() {}	Callable object

*/


// operators bhi you know.

// arithmetic (+ , - , % , *)
// comparision (> , < , >= , <= , ==)
// assignment.(=, += , -= ,*=)
// Logical (&& , ||,!)
// Bitwise (& , | , << , >>)
// ternary (condition?true:false)
// spread operator ...
// typeof operator

// and there are many more.


let x ="pradeep"
let y = false;
let z = 1;

//by adding n to last , it has become bigint now.
let a = 12345n;
let b = null;
let c = undefined;

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof a)
// it will not give null it will give object it is a bug in js.
console.log(typeof b)
console.log(typeof c)
