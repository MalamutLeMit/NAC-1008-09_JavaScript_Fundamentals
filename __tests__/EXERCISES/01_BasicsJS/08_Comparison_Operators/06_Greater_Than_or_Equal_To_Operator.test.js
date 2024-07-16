const { execSync } = require('child_process');

test('Check if priceA is greater than or equal to priceB using >= operator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/08_Comparison_Operators/06_Greater_Than_or_Equal_To_Operator.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});