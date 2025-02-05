//splice method-: it changes the original array.

//it is used to either delete or insert from an array , in between any array.

const myArray = ['item1', 'item2', 'item3', 'item4'];

//let us delete item2.

//startindex, how many items to delete,insert(insert karna hai to tab dena 3rd parameter warna mat dena).

//jo bhi delte kiya ye wo return karke dega .use ek variable mein bhi store kara skte ho.
myArray.splice(1, 1);
console.log(myArray);


//now let say we need to insert at index 1.


//start,delete(no of items),insert.
//insert k baad baki items shift ho jayegne.
myArray.splice(1, 0, 'inserted item');
console.log(myArray);


//both insert and delete at same time or together.

//starting from index 1 , we have to delete 2 items and we have to inserted these 2 items that are inside strings.
myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log(myArray);



