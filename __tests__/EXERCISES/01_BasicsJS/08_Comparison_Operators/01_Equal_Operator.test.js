const { execSync } = require('child_process');

test('Check equality of numX and numY using == operator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/08_Comparison_Operators/01_Equal_Operator.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});
