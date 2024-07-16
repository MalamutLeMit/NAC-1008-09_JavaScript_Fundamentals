const { execSync } = require('child_process');

test('Check totalScore update using compound assignment', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/03_Updating_Variable_Value/05_Updating_with_a_Compound_Assignment.js').toString().trim();
  const expectedOutput = 'The total score is: 150';
  expect(output).toBe(expectedOutput);
});