const { execSync } = require('child_process');

test('Check for...of loop to log each value', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/12_Loops/05_for_of_Loop.js').toString().trim().split('\n');
  const expectedOutput = [
    'Value: 1',
    'Value: 2',
    'Value: 3',
    'Value: 4',
    'Value: 5'
  ];
  expect(output).toEqual(expectedOutput);
});