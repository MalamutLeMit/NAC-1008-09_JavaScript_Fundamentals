const { execSync } = require('child_process');

test('Check arithmetic operation on numA and numB', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/02_Numeric_Variable/02_Performing_Arithmetic_Operation.js').toString().trim();
  const expectedOutput = 'The sum of numA and numB is: 22';
  expect(output).toBe(expectedOutput);
});