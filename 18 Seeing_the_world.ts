
// store the location i an array. make sure the array is not in alphabetical order. 
let places :string[] = ['Italy','Germany','Agra','Eifel Tower','Times Square'];

// print your array in its original order. 
console.log('Original '+ places);

//print your array in alphabetical order without modifying the actual list.
console.log('Copy '+ [...places]);

// show that your array is still in its original order by printing it.
console.log('Original ' + places);

// print your array in reverse alphabetical order without changing the order of the  original list.
console.log('Copy ' + [...places].sort().reverse());

// show that your array is still in its original order by printing it again.
console.log('Original ' + places);

// reverse the order of your list.  print the  array to show that  its order has changed.
 console.log('Original ' + places.reverse());

 // reverse the order of your list again. print the list to show it's back to its original order.
 console.log('Original ' + places.reverse());

 //sort your array so it's stored in alphabetical order . print the array to show that its order has been changed.
 console.log( 'Original ' + places.sort());

 //sort to chang  your array so it's stored in reverse alphabetical order. print the lidt to show that its order has changed.
 console.log('Original ' + places.sort().reverse());
 