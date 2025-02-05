// block scope vs function scope.

//let and const are block scope.
//var is function scope.

{
  let firstName = "pradeep";
  const x = 10;
}
//we cannot use firstname variable and x outside the above block ,this  below will give error.
// console.log(firstName);
//console.log(x);


//now study about var.
//var access ho jayega outside the block bhi.
{
  var firstName = "pradeep";
}

{
  console.log(firstName);
}

function myApp(){
  if (true) {
    let first = "pradeep";
    console.log(first);
  }

  //this will give error as first is declared using let and it cannot be used outside if block , this is different from lexical scoping kyu ki wha hum bahar ki tarf jake check karte hai.

  console.log(first);
}

myApp();



