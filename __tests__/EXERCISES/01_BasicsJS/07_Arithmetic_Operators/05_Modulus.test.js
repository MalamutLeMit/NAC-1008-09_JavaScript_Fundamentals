const { execSync } = require('child_process');

test('Check remainder of dividend divided by divisor', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/07_Arithmetic_Operators/05_Modulus.js').toString().trim();
  const expectedOutput = 'The remainder of \'dividend\' divided by \'divisor\' is:  3';
  expect(output).toBe(expectedOutput);
});
