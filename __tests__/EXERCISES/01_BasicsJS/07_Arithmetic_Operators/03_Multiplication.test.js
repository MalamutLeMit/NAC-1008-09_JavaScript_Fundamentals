const { execSync } = require('child_process');

test('Check product of numA and numB', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/07_Arithmetic_Operators/03_Multiplication.js').toString().trim();
  const expectedOutput = "The result of 'numA' * 'numB' is: 30";
  expect(output).toBe(expectedOutput);
});