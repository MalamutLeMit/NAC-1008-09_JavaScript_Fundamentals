const { execSync } = require('child_process');

test('Check favoriteColor variable assignment', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/05_Data_Types/01_Declare_a_String_variable.js').toString().trim();
  const expectedOutput = 'My favorite color is blue';
  expect(output).toBe(expectedOutput);
});