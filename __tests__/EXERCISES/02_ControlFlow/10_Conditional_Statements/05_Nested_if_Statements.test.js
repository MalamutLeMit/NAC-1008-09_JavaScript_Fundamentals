const { execSync } = require('child_process');

test('Check nested if statements for isWeekend and time', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/10_Conditional_Statements/05_Nested_if_Statements.js').toString().trim();
  const expectedOutput = 'Good morning';
  expect(output).toBe(expectedOutput);
});