let playerScore = 0;
let computerScore = 0;
let playerSelection;
let roundNumber = 1;

let options = ['rock', 'paper', 'scissors'];
    
const computerSelection = computerPlay();

function computerPlay() {
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
btnRock.addEventListener('click', () => playRound(handleClick('rock'), computerSelection));
btnPaper.addEventListener('click', () => playRound(handleClick('paper'), computerSelection));
btnScissors.addEventListener('click', () => playRound(handleClick('scissors'), computerSelection));

let handleClick = (playerSelection) => {
    if (playerSelection === 'rock') {
        return 'rock'
    } else if (playerSelection === 'paper') {
        return 'paper'
    } else if (playerSelection === 'scissors') {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    
    
    if (playerSelection == computerSelection) {
        console.log('No winners! Play again.')
        roundNumber++;
    } else if 
    ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection =='rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    ) { 
        roundNumber++;
        playerScore = playerScore+1;
        console.log('You win! Your score is: ' + playerScore)
        
    } else if 
    ((computerSelection == 'rock' && playerSelection == 'scissors') || 
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'scissors') 
    ) {
        roundNumber++;
        computerScore = computerScore+1;
        console.log('You lose! The computer\'s score is: ' + computerScore)
    } 
}

// function game() {
//     for (i = roundNumber; i <= 5; i++) {
//     playRound(playerSelection, computerSelection);
//     }
// }

//         game();

// function playRound(playerSelection, computerSelection) {
//     playerSelection = prompt('Rock, Paper, or Scissors?: ')
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection == computerSelection) {
//         console.log('No winners! Play again.')
//         roundNumber++;
//     } else if 
//     ((playerSelection == 'rock' && computerSelection == 'scissors') || 
//     (playerSelection == 'paper' && computerSelection =='rock') ||
//     (playerSelection == 'scissors' && computerSelection == 'paper')
//     ) { 
//         roundNumber++;
//         playerScore = playerScore+1;
//         console.log('You win! Your score is: ' + playerScore)
        
//     } else if 
//     ((computerSelection == 'rock' && playerSelection == 'scissors') || 
//     (computerSelection == 'paper' && playerSelection =='rock') ||
//     (computerSelection == 'scissors' && playerSelection == 'paper') 
//     ) {
//         roundNumber++;
//         computerScore = computerScore+1;
//         console.log('You lose! The computer\'s score is: ' + computerScore)
//     } 
// }