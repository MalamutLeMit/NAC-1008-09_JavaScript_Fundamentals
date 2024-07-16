const { execSync } = require('child_process');

test('Check area calculation using PI and radius', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/02_Numeric_Variable/03_Using_const_for_mathematical_constant.js').toString().trim();
  const expectedOutput = 'The area of the circle is: 78.53975';
  expect(output).toBe(expectedOutput);
});