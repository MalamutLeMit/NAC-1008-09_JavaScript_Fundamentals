const { execSync } = require('child_process');

test('Check fullname, age, and country variables', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/01_Declaring_Variables/04_Declaring_Multiple_Variables.js').toString();
  const expectedOutput = 'I know John Doe, he is 30 years old and he lives in Canada.';
  expect(output.trim()).toBe(expectedOutput);
});