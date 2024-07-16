const { execSync } = require('child_process');

test('Check quotient of numerator and denominator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/07_Arithmetic_Operators/04_Division.js').toString().trim();
  const expectedOutput = "The quotient of 'numerator' and 'denominator' is: 5";
  expect(output).toBe(expectedOutput);
});