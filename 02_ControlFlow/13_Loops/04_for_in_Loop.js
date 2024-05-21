// Exercise 4
// Declare an object 'person' with properties 'name', 'age', and 'city'.
// Use a for...in loop to log each property and its value.

// Your code here
const variableName1 = {
    keyName1: 'John',
    keyName2: 25,
    keyName3: 'New York'
  };
  
  for (const variableName2 in person) {
    console.log(variableName2 + ': ' + person[variableName2]);
  }
  // Expected Output:
  // name: John
  // age: 25
  // city: New York
  



// In the terminal, copy & paste the code below and run it to see the result in the console.

// node 02_ControlFlow/13_Loops/04_for_in_Loop.js