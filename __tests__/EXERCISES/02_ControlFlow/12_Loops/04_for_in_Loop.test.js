const { execSync } = require('child_process');

test('Check for...in loop to log each property and its value', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/12_Loops/04_for_in_Loop.js').toString().trim().split('\n');
  const expectedOutput = [
    'name: John',
    'age: 25',
    'city: New York'
  ];
  expect(output).toEqual(expectedOutput);
});