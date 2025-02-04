//use of spread operator in object.


//an object can have only one key if we have 2 key with same name so the key decalered at last will override the above declared key.

const obj = {
  key1: "value1",
  key2: "value2"
};


const obj2 = {
  key3: "value3",
  key4: "value4",
};

const newObject= { ...obj, ...obj2,key68:"raha nahi jata" };
console.log(newObject);