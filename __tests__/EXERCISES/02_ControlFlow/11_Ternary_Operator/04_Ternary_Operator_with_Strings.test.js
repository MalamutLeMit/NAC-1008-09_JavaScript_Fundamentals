const { execSync } = require('child_process');

test('Check ternary operator for userType', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/11_Ternary_Operator/04_Ternary_Operator_with_Strings.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});