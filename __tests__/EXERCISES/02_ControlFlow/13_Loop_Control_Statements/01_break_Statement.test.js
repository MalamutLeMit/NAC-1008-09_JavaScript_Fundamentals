const { execSync } = require('child_process');

test('Check for loop with break statement', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/13_Loop_Control_Statements/01_break_Statement.js').toString().trim().split('\n');
  const expectedOutput = [
    'Iteration 0',
    'Iteration 1'
  ];
  expect(output).toEqual(expectedOutput);
});