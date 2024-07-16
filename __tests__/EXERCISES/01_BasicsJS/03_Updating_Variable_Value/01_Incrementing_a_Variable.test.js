const { execSync } = require('child_process');

test('Check counter increment by 2', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/03_Updating_Variable_Value/01_Incrementing_a_Variable.js').toString().trim();
  const expectedOutput = 'The value of counter is 12';
  expect(output).toBe(expectedOutput);
});