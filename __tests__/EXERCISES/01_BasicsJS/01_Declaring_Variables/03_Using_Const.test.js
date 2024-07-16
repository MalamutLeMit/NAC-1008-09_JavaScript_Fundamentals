const { execSync } = require('child_process');

test('Check daysInMonth constant and its immutability', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/01_Declaring_Variables/03_Using_Const.js').toString();
  const lines = output.trim().split('\n');
  
  expect(lines[0]).toBe('There is 30 days in a month.');
  expect(lines[1]).toBe('Assignment to constant variable.');
});