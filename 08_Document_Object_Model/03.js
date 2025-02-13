//get and set atributes.

//This will select the first anchor tag.in the html document.
const link = document.querySelector("a")
//it will give the attribute value href of anchor tag.
console.log(link.getAttribute("href"));
//setting the href value to www.google.com
link.setAttribute("href", "www.google.com");
//priting the newly setted value.
console.log(link.getAttribute("href"));


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

//get multiple elements using getElements by class name.
//it will select all the items whose class is nav-items.
const navItems = document.getElementsByClassName("nav-items");
console.log(navItems);
//navItems here is an arraylike object.

//get multiple items using querySelectorAll.
const elements = document.querySelectorAll(".nav-item");
console.log(elements);
//it will return list of all elements with class nav-item