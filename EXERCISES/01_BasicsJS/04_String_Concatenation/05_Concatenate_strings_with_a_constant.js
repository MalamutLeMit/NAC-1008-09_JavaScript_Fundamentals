// Exercise 1.4.5

// Step 1: Declare a 'let' variable named 'greeting', don't assign it any value.
// Write your code below




// Step 2: Declare a 'const' variable named 'good' and assign it the value 'Good '.
// Write your code below




// Step 3: Declare a 'const' variable named 'firstName' and assign 'John' as the value.
// Write your code below




// Step 4: Declare a 'let' variable named 'currentTime' and assign it the value of the function: new Date().getHours().
// Write your code below




// Step 5: Declare another 'let' variable named 'timeOfDay'.
// Write your code below




// Don't change the code of the if statement.
if (currentTime < 12) {
    timeOfDay = "morning";
} else if (currentTime < 18) {
    timeOfDay = "afternoon";
} else {
    timeOfDay = "evening";
}




// Step 6: Update the value 'greeting' and assign it the value of the formula: good + ' ' + timeOfDay + ', ' + firstName + '!'
// Write your code below




// Don't change the code of the console.log()
console.log(greeting);
// example of Expected Output: 'Good morning, John!' or 'Good afternoon, John!' or 'Good evening, John!'




// To see the result of the console.log(), use the command below in the terminal:
// node EXERCISES/01_BasicsJS/04_String_Concatenation/05_Concatenate_strings_with_a_const_and_let.js

// To run the test of this specific exercise, use the command below in the terminal:
// npm run test:1.4.5
