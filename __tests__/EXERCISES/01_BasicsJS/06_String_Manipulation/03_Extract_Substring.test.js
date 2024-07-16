const { execSync } = require('child_process');

test('Check substring extraction using slice method', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/06_String_Manipulation/03_Extract_Substring.js').toString().trim();
  const expectedOutput = 'brown';
  expect(output).toBe(expectedOutput);
});