//arrow functions.

const user1 = {
  firstName: "pradeep",
  age: 8,
  about: () => {
    console.log(this.firstName, this.age)
  }
}

//it will give undefined , undefined.
//bcoz arrow function ka jo this hota hai it is taken from one level up form it's surrounding . means here surrounding is user1 to uske upar hai window object so here it is taking this from window object so that's why i am getting undefined.
user1.about();