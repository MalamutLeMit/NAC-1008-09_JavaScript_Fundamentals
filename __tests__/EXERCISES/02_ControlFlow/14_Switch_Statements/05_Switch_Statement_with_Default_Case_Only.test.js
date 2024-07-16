const { execSync } = require('child_process');

test('Check switch statement with default case only for animal', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/14_Switch_Statements/05_Switch_Statement_with_Default_Case_Only.js').toString().trim();
  
  const expectedOutput = "It's an unknown animal.";
  
  expect(output).toBe(expectedOutput);
});
