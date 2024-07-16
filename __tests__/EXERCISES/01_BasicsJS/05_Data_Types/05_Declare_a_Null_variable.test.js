const { execSync } = require('child_process');

test('Check nullVar declaration', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/05_Data_Types/05_Declare_a_Null_variable.js').toString().trim();
  const expectedOutput = 'nullVar is null';
  expect(output).toBe(expectedOutput);
});