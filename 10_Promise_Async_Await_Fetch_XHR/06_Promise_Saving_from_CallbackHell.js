//now we have seen the callback hell condition in our previous lectures , which occur due to multiple callbacks so we can get rid of this hell condition by replacing these callbacks with promises. It will make code more clearer and understandable.

// so we will link this code with the html file present in this folder of lecture 10 and we will try to change the html elements color in a specific time interval by using promise instead of callback.

// so let's begin.

const heading1 = document.querySelector(".heading1");

const heading2 = document.querySelector(".heading2");

const heading3 = document.querySelector(".heading3");

const heading4 = document.querySelector(".heading4");

const heading5 = document.querySelector(".heading5");

const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("element not found")
      }
    },time)
  })
}

//this function will return a promise which will be handled by then() function where inside it's callback in case of successfull resolve we will call changeText which will itself return a promise again and hence one more then() will be required and hence we can do chaining of then() statements.

//Aur jaise ki we know agar we do not return promise explicitly from inside the then functin it automatically returns undefined . So we need to return changeText as it is also returning a promise but here as we are using arrow function so in arrow function we can remove the curley brackets and we can return in one line without writing the return keyword so that's why we don't have written the return keyword.

//if we don't use arrow function it will look like this .

// changeText(heading1,"one","red",1000).then(()=>{
//   return changeText(heading2,"two,"purple",1000)}).then so on

changeText(heading1, "one", "red", "1000")
  .then(() => changeText(heading2, "two",  "red","1000"))
  .then(() => changeText(heading3, "three", "red","1000"))
  .then(() => changeText(heading4, "four", "red","1000"))
  .then(() => changeText(heading5, "five", "red","1000"))
  .then(() => changeText(heading6, "six", "red","1000"))
  .then(() => changeText(heading7, "seven", "red","1000"))
  .then(() => changeText(heading8, "eight", "red","1000"))
  .then(() => changeText(heading9, "nine", "red","1000"))
  .then(() => changeText(heading10, "ten", "red", "1000"))
  .catch((error) => {
    alert(error)
  })

//here we have added catch statement such that if in any case any of the then promise is rejected then catch will pop an error and the remaining then function will not be executed.
  
//ye code har ek sec mein ek ek karke color aur text change karega html elements ka.


