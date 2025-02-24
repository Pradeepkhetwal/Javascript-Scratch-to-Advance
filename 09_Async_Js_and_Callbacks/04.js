//setInterval.

console.log("Script start");

  
//here in setInterval callback har 1 sec baad run hoga at last.(concept wahi hai brower 1 sec baad js ko dega ye callback function and it will be added in callback queue)
setInterval(() => {
  console.log(Math.random());
}, 1000)

console.log("script end")

//output of the code will be.

/*
Script start
script end.
Callback will execute here after every 1 sec continously(means random number generate hote rahenge after every 1 sec.).
*/