const { execSync } = require('child_process');

test('Check short-circuit evaluation with isActiveSession and accountLevel', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/09_Logical_Operators/05_Short-Circuit_Evaluation.js').toString().trim();
  const expectedOutputTrue = 'true';

  expect(output).toBe(expectedOutputTrue);
});
