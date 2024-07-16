const { execSync } = require('child_process');

test('Check if-else if-else statement for score', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/10_Conditional_Statements/03_if-else_if-else_Statement.js').toString().trim().split('\n');
  const scoreOutput = output[0];
  const score = parseFloat(scoreOutput.split(': ')[1]);
  const resultOutput = output[1];
  let expectedOutput;

  if (score >= 0.9) {
    expectedOutput = 'Excellent';
  } else if (score >= 0.6) {
    expectedOutput = 'Good';
  } else {
    expectedOutput = 'Needs Improvement';
  }

  expect(resultOutput).toBe(expectedOutput);
});