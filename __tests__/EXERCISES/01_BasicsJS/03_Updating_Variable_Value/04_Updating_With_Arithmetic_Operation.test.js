const { execSync } = require('child_process');

test('Check currentValue update using increment', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/03_Updating_Variable_Value/04_Updating_With_Arithmetic_Operation.js').toString().trim();
  const expectedOutput = 'The current value is: 20';
  expect(output).toBe(expectedOutput);
});