//object destructuring

const band = {
  bandName: "led zeeplin",
  famousSong: "stairway to heaven",
  year: 1980
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,famousSong);

//shortcut for the above commented code is
//here bandName and famousSong constants hai bhai we can also create variables using let using the same as below.

// const { bandName, famousSong } = band;
// console.log(bandName);

//if i write like this then we will have variables var1 and var2 which will be storing the value of key bandName and famousSong.

const { bandName: var1, famousSong: var2 } = band;

console.log(var1);


//bache hue keyvalues ko if you want to store in an object then you can do this.

let { bandName, famousSong, ...restProps } = band;

console.log(bandName);
//restProps is an object here.
console.log(restProps);









