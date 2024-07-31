const { execSync } = require('child_process');

test('Check currentTemperature variable update', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/01_Declaring_Variables/02_Changing_Variable_Value.js').toString();
  const lines = output.trim().split('\n');
  expect(lines[0]).toBe('The current temperature is: 25');
  expect(lines[1]).toBe('Now the current temperature is: 30');
});