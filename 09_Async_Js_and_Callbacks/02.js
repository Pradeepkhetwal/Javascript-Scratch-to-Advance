
//This is very important.
//now here understand set timeout in details

console.log("Scripts starts");

//delay is 0 ms.But still it will be executed at last becoz dekho sabse pehele upar wala console.log run hoga in no time then after 0 millisec delay brower will give callback to js to execute and it will be stored in js callback queue.
//Now then after this will not be exected instead the code below this setTimeout will be executed.And at last this hello will be printed.
//Now then after this will not be exected instead the code below this setTimeout will be executed.And at last this hello will be printed.
setTimeout(() => {
  console.log("hello")
}, 0)

for (let i = 0; i < 100; i++) {
  console.log("...");
}

console.log("Scripts ends");

//dekho out of this code will be.

/* 
Scripts starts
... 99 times.
Scripts ends.
hello

*/

//look chahe delay kitna bhi ho setTimeout wala callback sabse last mein run hoga chahe file mein remaining code 1 ghanta kyu na lele , tabh  bhi setTimeout last mein hi execute hoga.

