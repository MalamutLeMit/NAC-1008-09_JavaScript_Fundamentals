const { execSync } = require('child_process');

test('Check if statement for isRaining', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/10_Conditional_Statements/01_Simple_if_Statement.js').toString().trim();
  const expectedOutput = 'Take an umbrella';
  expect(output).toBe(expectedOutput);
});
