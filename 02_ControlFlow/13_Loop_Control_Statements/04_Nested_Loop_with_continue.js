// Exercise 2.13.4
// Use nested for loops to iterate over rows and columns.
// Add a continue statement to skip the inner loop when the row is 1 and the column is 1.

// Your code here
for (let variableName1 = 0; variableName1 < 3; variableName1++) {
  for (let variableName2 = 0; variableName2 < 2; variableName2++) {
    if (variableName1 === 1 && variableName2 === 1) {
      continue;
    }
    console.log('Row ' + row + ', Column ' + column);
  }
}
// Expected Output:
// Row 0, Column 0
// Row 0, Column 1
// Row 1, Column 0
// Row 2, Column 0
// Row 2, Column 1




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 02_ControlFlow/13_Loop_Control_Statements/04_Nested_Loop_with_continue.js