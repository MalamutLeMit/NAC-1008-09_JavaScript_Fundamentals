const { execSync } = require('child_process');

test('Check price variable declaration', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/02_Numeric_Variable/01_Declare_a_Numeric_Variable.js').toString().trim();
  const expectedOutput = 'The price of this shirt is 20';
  expect(output).toBe(expectedOutput);
});