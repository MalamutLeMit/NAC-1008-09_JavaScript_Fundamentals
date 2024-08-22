const { execSync } = require('child_process');

test('Check fullName concatenation with firstName and lastName', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/06_String_Manipulation/01_Concatenate_Strings.js').toString().trim();
  const expectedOutput = 'My first name is John and my last name is Doe, I am John Doe.';
  expect(output).toBe(expectedOutput);
});