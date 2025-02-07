function hello() {
  console.log("hello");
}


// in js functions are treated as functions as well as objects.

//properties for function.

//it will give name of the function which is hello itself
console.log(hello.name);

//self defined properties can be assigned to function as.

hello.MyOwnProperty = "very unique";
console.log(hello.MyOwnProperty);

//every function provide object called as prototype.
//this protoype object has only constructor.

console.log(hello.prototype);

//we can add properties to prototype as well
hello.prototype.abc = "abc";

console.log(hello.prototype)

// we can add function as well like this.
hello.prototype.sing = function () {
  return "lalalalaaaa"
}
console.log(hello.prototype.sing);

//do not confuse proto with this prototype.