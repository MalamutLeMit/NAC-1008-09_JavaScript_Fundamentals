const { execSync } = require('child_process');

test('Check message concatenation with text and score', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/04_String_Concatenation/03_Combine_strings_with_a_number.js').toString().trim();
  const expectedOutput = 'The score is 100';
  expect(output).toBe(expectedOutput);
});