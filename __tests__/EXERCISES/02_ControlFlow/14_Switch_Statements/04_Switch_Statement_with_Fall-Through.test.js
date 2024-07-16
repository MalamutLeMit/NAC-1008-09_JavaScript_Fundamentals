const { execSync } = require('child_process');

test('Check switch statement with fall-through for month', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/14_Switch_Statements/04_Switch_Statement_with_Fall-Through.js').toString().trim();
  
  const expectedOutput = `It's the second half of the year.`;
  
  expect(output).toBe(expectedOutput);
});