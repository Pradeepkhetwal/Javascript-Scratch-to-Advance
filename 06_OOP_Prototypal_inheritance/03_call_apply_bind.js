//in js we have a call , apply , bind.

function about(hobby) {
  console.log(this.firstName ` ki hobyy is ${hobby}`);
}
const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName,this.age)
  },

  about2: function (x, y) {
    console.log(x + y);
  }
}


const user2 = {
  firstName: "mohit",
  age:7
}

//now if we want to use about method but with user2 object. dekho about method is not declared inside user2 par we can use it for user2 as.


//dekho about user1 ka method hai to user1 will call it by user1.about now we will use a 'call' method inside which we pass ki this kisko refer karega , here we have passed user2 , so inside about method this will now refer to user2.

//if we don't pass any parameter to call method it will give undefined as output , agar user1 de doge as parameter so output will come for user1.
user1.about.call(user2);

//if function has parameter we can pass like this.
user1.about2.call(user2, 1, 1);


//apply method -: it is same as call method , as it internally uses call method.


//yaha par parameters simply ek array mein daal k pass kar skte hai.
user1.about2.apply(user2, [1, 1]);



//Bind funcrtion
//bind returns a function 
//bind method is used to bind 'this' with the object and the calling function. 
const fun = user1.about2.bind(user2, 1, 1);

//infuture ab hum simply fun ko call kar skte hai , directly it will be called for user2.

//it will give 2 in the output
fun();





