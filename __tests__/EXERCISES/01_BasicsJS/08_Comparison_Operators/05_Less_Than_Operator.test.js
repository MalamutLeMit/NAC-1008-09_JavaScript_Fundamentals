const { execSync } = require('child_process');

test('Check if quantityA is less than quantityB using < operator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/08_Comparison_Operators/05_Less_Than_Operator.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});
