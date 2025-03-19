//promise && setTimeout together.

// suppose we want to resolve or reject our promise after a specific timeperiod so in that case we will use settimeout and promise together.

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve();
      }
      else {
        reject();
      }
    },2000)
  })
}
//console mein 2 sec baad hi print hoga jo bhi promse ka result hoga.
myPromise().then(() => { console.log("resolved") }).catch(() => { console.log("rejected") });