const { execSync } = require('child_process');

test('Check counter doubling', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/03_Updating_Variable_Value/03_Doubling_the_value.js').toString().trim();
  const expectedOutput = 'The value of counter is 16';
  expect(output).toBe(expectedOutput);
});