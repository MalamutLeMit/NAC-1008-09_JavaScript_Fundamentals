const { execSync } = require('child_process');

test('Check strict equality of numC and stringNumC using === operator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/08_Comparison_Operators/03_Strict_Equal_Operator.js').toString().trim();
  const expectedOutput = 'false';
  expect(output).toBe(expectedOutput);
});