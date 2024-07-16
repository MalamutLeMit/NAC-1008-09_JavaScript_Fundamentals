const { execSync } = require('child_process');

test('Check undefinedVar declaration', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/05_Data_Types/04_Declare_an_Undefined_variable.js').toString().trim();
  const expectedOutput = 'undefinedVar is undefined';
  expect(output).toBe(expectedOutput);
});