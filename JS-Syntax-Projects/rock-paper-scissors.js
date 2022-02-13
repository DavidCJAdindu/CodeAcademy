/*

Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

1. Get the user’s choice.
2. Get the computer’s choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.


*/



// function that takes user input "rock, paper or scissors"
const getUserChoice  = (userInput) => {

userInput = userInput.toLowerCase();

if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
    return 'NOT ROCK, PAPER OR SCISSORS!';
    } else {
    return userInput;
    }

};


// function that returns a rock paper or scissors value 
const getComputerChoice = () => {

let randNum = Math.floor(Math.random()*3);

// console.log(randNum);

if (randNum === 0) {
    return 'rock';
    } else if (randNum === 1) {
    return 'paper';
    } else {
    return 'scissors';
    }

}


// function that determines a winner 
function determineWinner(userChoice, computerChoice) {

    if(userChoice === computerChoice){
        return ("The game is a tie.");
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

}



// game functionality 
const playGame = () => {

// enter rock,paper or scissors into arguement of getUserChoice 
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();

console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));

};


// Call the playGame() function to start the game 
playGame();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  