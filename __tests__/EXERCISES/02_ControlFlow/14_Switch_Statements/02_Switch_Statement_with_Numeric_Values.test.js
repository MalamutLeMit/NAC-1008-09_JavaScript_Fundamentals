const { execSync } = require('child_process');

test('Check switch statement with numeric values', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/14_Switch_Statements/02_Switch_Statement_with_Numeric_Values.js').toString().trim();
  
  const validOutputs = [
    'The number is one.',
    'The number is two.',
    'The number is three.'
  ];
  
  expect(validOutputs).toContain(output);
});