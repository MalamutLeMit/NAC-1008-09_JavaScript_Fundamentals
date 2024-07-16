const { execSync } = require('child_process');

test('Check if-else statement for morning', () => {
  let output = execSync('node EXERCISES/02_ControlFlow/10_Conditional_Statements/02_if-else_Statement.js').toString().trim();
  let expectedOutput = 'Good morning';
  expect(output).toBe(expectedOutput);
});