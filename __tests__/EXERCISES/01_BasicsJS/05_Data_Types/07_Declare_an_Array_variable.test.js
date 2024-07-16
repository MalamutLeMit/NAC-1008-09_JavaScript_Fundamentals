const { execSync } = require('child_process');

test('Check fruits array declaration', () => {
  const output = execSync('node EXERCISES/01_BasicsJS/05_Data_Types/07_Declare_an_Array_variable.js').toString().trim().split('\n');
  const expectedOutput1 = "[ 'Apple', 'Banana', 'Orange' ]";
  const expectedOutput2 = 'Banana';
  expect(output[0]).toBe(expectedOutput1);
  expect(output[1]).toBe(expectedOutput2);
});
