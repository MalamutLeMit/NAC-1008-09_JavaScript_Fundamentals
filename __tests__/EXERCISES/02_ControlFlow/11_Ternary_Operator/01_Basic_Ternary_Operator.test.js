const { execSync } = require('child_process');

test('Check ternary operator for isRaining', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/11_Ternary_Operator/01_Basic_Ternary_Operator.js').toString().trim();
  const expectedOutput = 'Take an umbrella';
  expect(output).toBe(expectedOutput);
});