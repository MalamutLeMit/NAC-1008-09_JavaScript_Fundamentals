const { execSync } = require('child_process');

test('Check greeting concatenation with good, timeOfDay, and firstName', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/04_String_Concatenation/05_Concatenate_strings_with_a_const_and_let.js').toString().trim();
  const currentTime = new Date().getHours();
  let timeOfDay;
  
  if (currentTime < 12) {
    timeOfDay = "morning";
  } else if (currentTime < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  
  const expectedOutput = `Good ${timeOfDay}, John!`;
  expect(output).toBe(expectedOutput);
});