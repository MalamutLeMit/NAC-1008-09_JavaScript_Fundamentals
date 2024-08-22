const { execSync } = require('child_process');

test('Check ternary operator for temperature', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/11_Ternary_Operator/02_Ternary_Operator_with_Numbers.js').toString().trim();
  const expectedOutput = 'Hot';
  expect(output).toBe(expectedOutput);
});