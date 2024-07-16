const { execSync } = require('child_process');

test('Check message concatenation with areaExpression', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/04_String_Concatenation/04_Concatenate_strings_with_an_expression.js').toString().trim();
  const expectedOutput = 'The area of the triangle is 25 square units.';
  expect(output).toBe(expectedOutput);
});
