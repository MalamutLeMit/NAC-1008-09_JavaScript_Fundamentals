const { execSync } = require('child_process');

test('Check greeting concatenation with name', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/04_String_Concatenation/02_Concatenate_a_greeting.js').toString().trim();
  const expectedOutput = 'Hello, John! How are you today?';
  expect(output).toBe(expectedOutput);
});