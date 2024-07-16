const { execSync } = require('child_process');

test('Check firstName and lastName concatenation to fullName', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/04_String_Concatenation/01_Combine_first_and_last_name.js').toString().trim();
  const expectedOutput = 'Her first name is Alice and her last name is Smith, she is Alice Smith';
  expect(output).toBe(expectedOutput);
});