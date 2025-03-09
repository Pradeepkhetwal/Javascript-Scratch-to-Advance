//understanding callback

//basic callback to tumne padha hi hai pehle. (i.e passing function as a parameter to a function)


//Here we will study callbacks in asynchronous programming.
//For that we also have created a 05_index.html file which will be linked with this js .

//now we want to change the header <h1> present in 05_index.html file after 1 sec.

//so

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");


/*How will they execute?
The first setTimeout will execute after 4000ms (or 4 seconds).
The second setTimeout will execute after 3000ms (or 3 seconds).
Timeline:
0ms: Both setTimeout functions are set up and scheduled to run after their respective delays.
3000ms (3 seconds): The second setTimeout (which has a 3000ms delay) will execute first and update heading2's text to "Heading 2" and change the color to purple.
4000ms (4 seconds): After the first setTimeout's delay of 4000ms, it will execute and update heading1's text to "Hello bhai" and change the color to violet.
Final Execution Order:
The second setTimeout will execute first (after 3 seconds).
The first setTimeout will execute second (after 4 seconds).
Conclusion: The second setTimeout will run first because it has a shorter delay (3000ms), and the first setTimeout will run after that (after 4000ms).
*/

setTimeout(() => {
  heading1.textContent = "Hello bhai";
  heading1.style.color = "violet";
}, 4000);

setTimeout(() => {
  heading2.textContent = "Heading 2";
  heading2.style.color = "purple";
}, 3000)



//it is recomended to first run 05_index.html file by live server then add this js file to it and see the live effect.

//There is one mpre thing called as callback hell.

//In callback hell we have nested callback functions one inside each other.

// callback hell
/*execution of this callback <hell></hell>

/* The first setTimeout has a delay of 1000ms.

After 1000ms, the function inside it runs, changing the text of heading1 to "one".
Inside this first setTimeout, there is another setTimeout (the second one) with a 3000ms delay.
The second setTimeout has a delay of 3000ms relative to the first setTimeout. This means after the first setTimeout finishes (after 1000ms), it waits an additional 3000ms before running its code (changing heading2 to "two").

The third setTimeout has a delay of 2000ms relative to the second setTimeout, so it will run 2 seconds after the second one completes.

Why does the second one execute second?
The first setTimeout starts running immediately after the script executes, and after it finishes (1 second), it triggers the second setTimeout.
The second setTimeout starts executing after the first finishes, and after its 3000ms delay, it changes heading2 to "two".
The third setTimeout waits for 2 seconds after the second one finishes.
So the execution is:

The first setTimeout runs after 1 second, so heading1 changes to "one".
Then, inside the first setTimeout, it triggers the second setTimeout (which waits 3 seconds after the first finishes), so after 3 more seconds (4 seconds in total), heading2 changes to "two".
Finally, inside the second setTimeout, the third setTimeout starts and waits for 2 seconds, so after 6 seconds in total, heading3 changes to "three".
To summarize:
The 3000ms delay doesn't mean it will execute second in the overall timeline, it just means relative to the first setTimeout, the second one waits 3 seconds.
The order is determined by the nesting of the setTimeout functions, not just by the delay times. */

// Callback hell.
// setTimeout(() => {
//   heading1.textContent = "one";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     setTimeout(() => {
//       heading3.textContent = "three"
//     },2000)
//   },3000)
// }, 1000)

//in code(above) callback hello ko read karna bohot hi muskil hai so for that we have a concept called as promises.
//pyramid of doom is also callback hell.
