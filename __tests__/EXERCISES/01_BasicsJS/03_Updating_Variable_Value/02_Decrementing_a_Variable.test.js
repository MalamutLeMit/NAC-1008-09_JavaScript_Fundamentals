const { execSync } = require('child_process');

test('Check counter decrement by 5', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/03_Updating_Variable_Value/02_Decrementing_a_Variable.js').toString().trim();
  const expectedOutput = 'The value of counter is 15';
  expect(output).toBe(expectedOutput);
});