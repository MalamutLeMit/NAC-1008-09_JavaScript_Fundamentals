const { execSync } = require('child_process');

test('Check baseNumber value update', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/02_Numeric_Variable/05_Dynamic_numeric_variable_declaration.js').toString().trim();
  const expectedOutput = 'The value of baseNumber is: 10';
  expect(output).toBe(expectedOutput);
});