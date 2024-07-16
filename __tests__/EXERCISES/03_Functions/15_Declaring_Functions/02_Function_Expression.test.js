const { execSync } = require('child_process');

test('Check function expression for multiplyNumbers', () => {
  const output = execSync('node EXERCISES/03_Functions/15_Declaring_Functions/02_Function_Expression.js').toString().trim();
  
  const expectedOutput = '6';
  
  expect(output).toBe(expectedOutput);
});