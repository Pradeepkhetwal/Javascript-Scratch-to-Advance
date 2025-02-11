//select element using query selector.

//with the help of id selector we were only able to select element by id but with query selector we can select element by any , like here we can directly select header tag.
const header = document.querySelector(".header");
console.log(header);

//here .nav-item is a class of an element so here the element which will be encountered first that have class .nav-item will be shown in the console.
const navItem = document.querySelector(".nav-item");
console.log(navItem);

//in case we want to select all the elements with class navItem then we can simply write
const allNavItems = document.querySelectorAll(".nav-item");
console.log(allNavItems);

