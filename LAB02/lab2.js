// Code by Utsav Patel

const prompt = require('prompt');

prompt.start(); // Start the prompt

// Schema to validate user input
const schema = {
  properties: {
    userSelection: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,
      message: 'Please enter ROCK, PAPER, or SCISSORS only',
      required: true
    }
  }
};

prompt.get(schema, function (err, result) {
  if (err) {
    console.error('Error reading input');
    return;
  }

  const userSelection = result.userSelection.toUpperCase();

  // Generate computer selection
  const random = Math.random();
  let computerSelection = '';

  if (random < 0.34) {
    computerSelection = 'PAPER';
  } else if (random < 0.68) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log(`User selected: ${userSelection}`);
  console.log(`Computer selected: ${computerSelection}`);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log("User Wins");
  } else {
    console.log("Computer Wins");
  }
});
