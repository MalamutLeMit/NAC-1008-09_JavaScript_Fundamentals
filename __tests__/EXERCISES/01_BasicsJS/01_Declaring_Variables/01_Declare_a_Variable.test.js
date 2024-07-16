const { execSync } = require('child_process');

test('Check favoriteFruit variable', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/01_Declaring_Variables/01_Declare_a_Variable.js').toString();
  expect(output.trim()).toBe('I like: apple');
});

// To run this specific test, use the command below in the terminal:
// jest ./__tests__/EXERCISES/01_BasicsJS/01_Declaring_Variables/01_Declare_a_Variable.test.js