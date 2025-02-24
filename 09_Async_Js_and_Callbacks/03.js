//set timeout function also returns an id.

console.log("Script starts")

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 0);

for (let i = 1; i < 100; i++){
  console.log("..");
}
//here id will be 1 by default given by the system to this settimeout function.
console.log("settimeout id is ", id);
console.log("clearing time out");
//ye settimeout (whose id is 1) ko clear kar dega means settimeout will not run .
clearTimeout(id);
console.log("Scripts end");

//output the above will be.

/*
scripts starts
..
settiemout id is 1
clearing time out
Scripts end.
*/