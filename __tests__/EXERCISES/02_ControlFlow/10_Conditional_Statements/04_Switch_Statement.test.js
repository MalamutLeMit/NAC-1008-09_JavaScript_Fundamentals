const { execSync } = require('child_process');

test('Check switch statement for dayNumber', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/10_Conditional_Statements/04_Switch_Statement.js').toString().trim().split('\n');
  const dayName = output[0].split('Today it is ')[1];
  const resultOutput = output[1];
  let expectedOutput;

  switch (dayName) {
    case 'Monday':
      expectedOutput = "It's the start of the week";
      break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
      expectedOutput = "It's the middle of the week";
      break;
    case 'Friday':
      expectedOutput = "It's almost the weekend";
      break;
    case 'Saturday':
    case 'Sunday':
      expectedOutput = "It's the weekend";
      break;
    default:
      expectedOutput = "Invalid day";
  }

  expect(resultOutput).toBe(expectedOutput);
});