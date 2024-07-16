const { execSync } = require('child_process');

test('Check difference between numA and numB', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/07_Arithmetic_Operators/02_Subtraction.js').toString().trim();
  const expectedOutput = "The difference between 'numA' and 'numB' is: 12";
  expect(output).toBe(expectedOutput);
});