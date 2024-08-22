const { execSync } = require('child_process');

test('Check nested ternary operator for isWeekend and time', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/11_Ternary_Operator/03_Nested_Ternary_Operator.js').toString().trim();
  const expectedOutput = 'Good Morning!';
  expect(output).toBe(expectedOutput);
});