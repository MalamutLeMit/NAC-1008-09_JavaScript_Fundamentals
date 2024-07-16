const { execSync } = require('child_process');

test('Check for loop with continue statement', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/13_Loop_Control_Statements/02_continue_Statement.js').toString().trim().split('\n');
  const expectedOutput = [
    'Iteration 0',
    'Iteration 1',
    'Iteration 3',
    'Iteration 4'
  ];
  expect(output).toEqual(expectedOutput);
});