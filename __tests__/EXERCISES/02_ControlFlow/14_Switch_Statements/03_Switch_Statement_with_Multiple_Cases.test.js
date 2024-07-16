const { execSync } = require('child_process');

test('Check switch statement with multiple cases for fruit', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/14_Switch_Statements/03_Switch_Statement_with_Multiple_Cases.js').toString().trim();
  
  const expectedOutput = `It's an apple or an orange.`;
  
  expect(output).toBe(expectedOutput);
});