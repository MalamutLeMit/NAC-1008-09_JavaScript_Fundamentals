const { execSync } = require('child_process');

test('Check numApples variable assignment', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/05_Data_Types/02_Declare_a_Number_variable.js').toString().trim();
  const expectedOutput = 'I have 5 apples in my bag.';
  expect(output).toBe(expectedOutput);
});