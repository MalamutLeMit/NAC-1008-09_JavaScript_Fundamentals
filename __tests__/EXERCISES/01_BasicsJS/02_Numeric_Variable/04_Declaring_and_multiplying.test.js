const { execSync } = require('child_process');

test('Check totalPrice calculation using quantity and pricePerUnit', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/02_Numeric_Variable/04_Declaring_and_multiplying.js').toString().trim();
  const expectedOutput = 'I have 5 shirts and each one costs 25. The total price is $125.';
  expect(output).toBe(expectedOutput);
});