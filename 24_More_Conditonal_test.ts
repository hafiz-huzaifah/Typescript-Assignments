

//equality and ineqyality teat
console.log("Equality test with strings: ","Apple" === "Apple");

//equality and ineqyality test
console.log("Inequality test with strings: ",("Apple" as string) != "Orange");

//test  using the lower case function
console.log("Lower Case function test: ", "HELLO" .toLowerCase()  === "hello");

// numerical test involving equality and inequaity
console.log("Equality test with numbers: ", 28 === 28);

//greater oe less than
console.log("Greater than test: ", 28 > 12);

//greater  than or equal to 
console.log("Greater than or equal to test: ", 28 >= 28);

//less   than or equal to 
console.log("Less than or equal to test: ", 10 <= 15);

// test using "and"  operator
console.log("And operator test:", 4===4 && 30 > 10);

//  test using "or" operator
console.log("or operator test:", 2===2 || false);

//test weather an item is in an array
const fruits :string[] = ['Nashpati','Banana','Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));

//test weather an item is not in an array
console.log('Testing "Apple" is not in array: ', !fruits.includes("Apple"));




