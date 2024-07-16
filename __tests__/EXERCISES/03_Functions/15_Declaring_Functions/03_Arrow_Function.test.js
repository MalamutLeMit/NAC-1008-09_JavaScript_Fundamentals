const { execSync } = require('child_process');

test('Check arrow function for greetPerson', () => {
  const output = execSync('node EXERCISES/03_Functions/15_Declaring_Functions/03_Arrow_Function.js').toString().trim();
  
  const expectedOutput = 'Hello, John Doe!';
  
  expect(output).toBe(expectedOutput);
});