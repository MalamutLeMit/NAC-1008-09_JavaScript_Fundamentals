const { execSync } = require('child_process');

test('Check switch statement for dayNumber', () => {
  const output = execSync('node EXERCISES/02_ControlFlow/14_Switch_Statements/01_Basic_Switch_Statement.js').toString().trim().split('\n');
  const dayNumber = new Date().getDay();
  let expectedOutput = [];

  switch (dayNumber) {
    case 1:
      expectedOutput = [`Today it is Monday`, "It's the start of the week"];
      break;
    case 2:
      expectedOutput = [`Today it is Tuesday`, "It's the middle of the week"];
      break;
    case 3:
      expectedOutput = [`Today it is Wednesday`, "It's the middle of the week"];
      break;
    case 4:
      expectedOutput = [`Today it is Thursday`, "It's the middle of the week"];
      break;
    case 5:
      expectedOutput = [`Today it is Friday`, "It's almost the weekend"];
      break;
    case 6:
      expectedOutput = [`Today it is Saturday`, "It's the weekend"];
      break;
    case 0:
      expectedOutput = [`Today it is Sunday`, "It's the weekend"];
      break;
    default:
      expectedOutput = ["Invalid day"];
  }

  expect(output).toEqual(expectedOutput);
});