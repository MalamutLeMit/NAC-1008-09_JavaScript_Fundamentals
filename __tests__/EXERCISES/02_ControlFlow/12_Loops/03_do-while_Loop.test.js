const { execSync } = require('child_process');

test('Check do-while loop iterations from 0 to 4', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/12_Loops/03_do-while_Loop.js').toString().trim().split('\n');
  const expectedOutput = [
    'Iteration 0',
    'Iteration 1',
    'Iteration 2',
    'Iteration 3',
    'Iteration 4'
  ];
  expect(output).toEqual(expectedOutput);
});