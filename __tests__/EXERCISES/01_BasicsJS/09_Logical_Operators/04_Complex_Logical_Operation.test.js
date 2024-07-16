const { execSync } = require('child_process');

test('Check complex logical operation with isDaytime, !isWeekend, and scheduledMeeting', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/09_Logical_Operators/04_Complex_Logical_Operation.js').toString().trim();
  const expectedOutput = 'true';
  expect(output).toBe(expectedOutput);
});
