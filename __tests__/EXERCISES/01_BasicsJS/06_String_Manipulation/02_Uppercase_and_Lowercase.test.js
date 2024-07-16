const { execSync } = require('child_process');

test('Check string manipulation with toUpperCase and toLowerCase', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/06_String_Manipulation/02_Uppercase_and_Lowercase.js').toString().trim().split('\n');
  const expectedOutput1 = 'mixedCase in uppercases text: JAVASCRIPT IS FUN!';
  const expectedOutput2 = 'mixedCase in lowercase text text: javascript is fun!';
  expect(output[0]).toBe(expectedOutput1);
  expect(output[1]).toBe(expectedOutput2);
});