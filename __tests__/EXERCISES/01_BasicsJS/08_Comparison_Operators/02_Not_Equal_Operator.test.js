const { execSync } = require('child_process');

test('Check inequality of valueA and valueB using != operator', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/08_Comparison_Operators/02_Not_Equal_Operator.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});