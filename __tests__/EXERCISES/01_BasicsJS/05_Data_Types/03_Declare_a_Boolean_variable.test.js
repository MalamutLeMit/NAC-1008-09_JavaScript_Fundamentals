const { execSync } = require('child_process');

test('Check isSunny variable assignment', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/05_Data_Types/03_Declare_a_Boolean_variable.js').toString().trim();
  const expectedOutput = "It's sunny today";
  expect(output).toBe(expectedOutput);
});