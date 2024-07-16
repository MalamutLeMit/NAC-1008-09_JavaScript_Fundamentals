const { execSync } = require('child_process');

test('Check string length property', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/06_String_Manipulation/05_String_Length.js').toString().trim();
  const expectedOutput = "The length of the 'message' is: 44";
  expect(output).toBe(expectedOutput);
});