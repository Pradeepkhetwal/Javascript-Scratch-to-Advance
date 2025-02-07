//there is a global object in js that is called as window object.

//if we write
//console.log(window) or console.log(this) it will give window object.


//if we write this simple function.

function my() {
  "use strict";
  console.log(this);
}


my();
//it will give window object bcoz by default ye function is assocaited with window object, my() is same is window.my(); to avoid this we need strict mode.By using strict mode it will now give undefined , instead of window object.