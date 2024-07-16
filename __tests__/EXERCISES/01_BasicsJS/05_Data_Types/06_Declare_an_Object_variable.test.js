const { execSync } = require('child_process');

test('Check person object declaration', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/05_Data_Types/06_Declare_an_Object_variable.js').toString().trim();
  const expectedOutput = "{ firstname: 'John', age: 30, isActive: true }";
  expect(output).toBe(expectedOutput);
});