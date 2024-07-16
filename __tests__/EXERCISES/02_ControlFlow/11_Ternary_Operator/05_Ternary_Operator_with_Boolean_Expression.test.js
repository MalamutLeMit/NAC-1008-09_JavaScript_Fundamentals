const { execSync } = require('child_process');

test('Check ternary operator for sum of num1 and num2', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/11_Ternary_Operator/05_Ternary_Operator_with_Boolean_Expression.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});
