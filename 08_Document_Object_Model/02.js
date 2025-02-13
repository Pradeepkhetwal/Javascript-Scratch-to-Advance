//select element using query selector.

//with the help of id selector we were only able to select element by id but with query selector we can select element by any , like here we can directly select header tag.
const header = document.querySelector(".header");
console.log(header);

//here .nav-item is a class of an element so here the element which will be encountered first that have class .nav-item will be shown in the console.
const navItem = document.querySelector(".nav-item");
console.log(navItem);

//in case we want to select all the elements with class navItem then we can simply write.
const allNavItems = document.querySelectorAll(".nav-item");
console.log(allNavItems);


//change text
//now we need to select the text manage your task from the webpage and we want to change it .So we will select it by it's id. it's id is main-heading.

const heading = document.getElementById('main-heading')

//now this heading is an object returned by getElementById.

console.log(heading.textContent)
//we have changed it with hello pradeep.
heading.textContent = "Hello pradeep";
console.log(heading.textContent);

//innerText propety wahi text degi in console jo ki webpage pe dikh ri hai.

//textcontent property saara text dedegi even jo colour ki wajah se webpage pe nahi dikh ri , in console.

//Let's change the styles of element.
//here we will change the style of text pradeep.

//note -: const a = document.querySelector("div.headline h2") // ye snytax is selecting the first div whose class is headline and inside it h2 is being selected at final.

// so we can style the pradeep by using style.
//Hello pradeep ka color red ho gya hoga ab.
heading.style.color = "red";
// we can set any style using style property.
heading.style.backgroundColor = "blue";
heading.style.border = "2px solid green";



