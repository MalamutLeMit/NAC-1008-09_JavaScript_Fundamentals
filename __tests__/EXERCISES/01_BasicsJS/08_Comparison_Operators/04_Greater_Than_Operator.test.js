const { execSync } = require('child_process');

test('Check if lengthA is greater than lengthB using > operator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/08_Comparison_Operators/04_Greater_Than_Operator.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});