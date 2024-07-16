const { execSync } = require('child_process');

test('Check function declaration for addNumbers', () => {
  const output = execSync('node EXERCISES/03_Functions/15_Declaring_Functions/01_Function_Declaration.js').toString().trim();
  
  const expectedOutput = '5';
  
  expect(output).toBe(expectedOutput);
});