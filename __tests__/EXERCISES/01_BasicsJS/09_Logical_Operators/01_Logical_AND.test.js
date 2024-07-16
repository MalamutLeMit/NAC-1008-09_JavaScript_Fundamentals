const { execSync } = require('child_process');

test('Check logical AND operator with isMorning and isWeekday', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/09_Logical_Operators/01_Logical_AND.js').toString().trim();
  const expectedOutput = 'false';
  expect(output).toBe(expectedOutput);
});
