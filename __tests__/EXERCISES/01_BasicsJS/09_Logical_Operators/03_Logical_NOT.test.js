const { execSync } = require('child_process');

test('Check logical NOT operator on isRaining', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/09_Logical_Operators/03_Logical_NOT.js').toString().trim();
  const expectedOutput = 'false';
  expect(output).toBe(expectedOutput);
});