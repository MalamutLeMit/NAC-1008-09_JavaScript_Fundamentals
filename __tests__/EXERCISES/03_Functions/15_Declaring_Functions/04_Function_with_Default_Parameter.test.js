const { execSync } = require('child_process');

test('Check function with default parameter for greetUser', () => {
  const output = execSync('node EXERCISES/03_Functions/15_Declaring_Functions/04_Function_with_Default_Parameter.js').toString().trim();
  
  const expectedOutput = 'Hello, John!';
  
  expect(output).toBe(expectedOutput);
});