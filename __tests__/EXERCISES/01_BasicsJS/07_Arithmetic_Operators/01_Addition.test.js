const { execSync } = require('child_process');

test('Check sum of numA and numB', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/07_Arithmetic_Operators/01_Addition.js').toString().trim();
  const expectedOutput = "The sum of 'numA' and 'numB' is: 22";
  expect(output).toBe(expectedOutput);
});
