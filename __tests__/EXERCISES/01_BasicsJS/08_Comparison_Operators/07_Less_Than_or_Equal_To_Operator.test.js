const { execSync } = require('child_process');

test('Check if countA is less than or equal to countB using <= operator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/08_Comparison_Operators/07_Less_Than_or_Equal_To_Operator.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});