const { execSync } = require('child_process');

test('Check smartphone variable dynamic declaration', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/01_Declaring_Variables/05_Dynamic_Variable_Declaration.js').toString().trim();
  expect(['iPhone', 'Android']).toContain(output);
});