
function app() {
  const myfunc = () => {
    console.log("hello from myfunc");
  }

  const addTwo = (num1, num2) => {
    return num1 + num2;
  }

  console.log("inside app");
  console.log(addTwo(1, 1));
  console.log(myfunc());

}
app();