const { execSync } = require('child_process');

test('Check logical OR operator with !hasCoffee and isTired', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/09_Logical_Operators/02_Logical_OR.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});
