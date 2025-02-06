//Look map object is different and map method is different here we are now studying map object.


//maps.
//map is an iterable.

//map  store data in ordered fashion.

//map stores key value pari(like objects).
//duplicate keys are not allowed here like objects.

//difference between maps and objects.

//1. objects can only have string or symbol as key.

//2.in maps you can use anything as key.
//like array, number,string.


//lets make a map.

const person = new Map();

//adding key value pairs to Map.
person.set('firstname', 'pradeep');
person.set('age', 19);

person.set(1, 'one');

//to access the value of the keyfirstname we can write this.
console.log(person.get('firstname'));

//to print all keys we have keys() method.
console.log(person.keys());

for (let key of person.keys()){
  console.log(key);
}


//using for of loop.

for (let [key,value] of person) {
  console.log(key, value);
}


const person1 = {
  id: 1,
  firstName:"pradeep"
}

const userinfo = new Map();

userinfo.set(person1, { age: 8, gender: "male" });

console.log(userinfo);
console.log(person1.id);
console.log(userinfo.get(person1).gender);
