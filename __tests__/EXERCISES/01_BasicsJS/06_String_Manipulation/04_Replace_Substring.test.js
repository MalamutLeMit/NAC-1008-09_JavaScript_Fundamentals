const { execSync } = require('child_process');

test('Check substring replacement using replace method', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/06_String_Manipulation/04_Replace_Substring.js').toString().trim().split('\n');
  const expectedOutput1 = 'Hello, World!';
  const expectedOutput2 = 'Hello, Universe!';
  expect(output[0]).toBe(expectedOutput1);
  expect(output[1]).toBe(expectedOutput2);
});