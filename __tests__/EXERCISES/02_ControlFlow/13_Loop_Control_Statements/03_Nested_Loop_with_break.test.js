const { execSync } = require('child_process');

test('Check nested for loops with break statement', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/13_Loop_Control_Statements/03_Nested_Loop_with_break.js').toString().trim().split('\n');
  const expectedOutput = [
    'Row 0, Column 0',
    'Row 0, Column 1',
    'Row 1, Column 0',
    'Row 1, Column 1',
    'Row 2, Column 0',
    'break'
  ];
  expect(output).toEqual(expectedOutput);
});