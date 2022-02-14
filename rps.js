let playerScore = 0;
let computerScore = 0;
let playerSelection;

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
btnRock.addEventListener('click', () => playRound(handleClick('rock'), computerPlay()));
btnPaper.addEventListener('click', () => playRound(handleClick('paper'), computerPlay()));
btnScissors.addEventListener('click', () => playRound(handleClick('scissors'), computerPlay()));

let handleClick = (playerSelection) => {
    if (playerSelection === 'rock') {
        return 'rock'
    } else if (playerSelection === 'paper') {
        return 'paper'
    } else if (playerSelection === 'scissors') {
        return 'scissors'
    }
}

const roundWinner = document.querySelector('#roundWinner');
const roundMessage = document.querySelector('#roundMessage');
const playerScoreId = document.querySelector('#playerScoreId');
const computerScoreId =document.querySelector('#computerScoreId');

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        roundWinner.textContent = 'It\'s a tie!'
        
    } else if 
    ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection =='rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
    ) { 
        
        playerScore = playerScore+1;
        roundWinner.textContent = 'You win!';
        roundMessage.textContent = `${playerSelection} beats ${computerSelection}`
        playerScoreId.textContent = `Player: ${playerScore}`;

        if (playerScore === 5) {
            roundWinner.textContent = 'You won the whole game!'
            restartGame();
        }
        
    } else if 
    ((computerSelection == 'rock' && playerSelection == 'scissors') || 
    (computerSelection == 'paper' && playerSelection == 'rock') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') 
    ) {
        
        computerScore = computerScore+1;
        roundWinner.textContent = 'You lose!';
        roundMessage.textContent = `${computerSelection} beats ${playerSelection}`
        computerScoreId.textContent = `Computer: ${computerScore}` 

        if (computerScore === 5) {
            roundWinner.textContent = 'You lost the whole game!'
            restartGame();
        }
    } 
}

function restartGame() {
        playerScore = 0;
        computerScore = 0;
        roundWinner.textContent = 'Choose your weapon';
        roundMessage.textContent = 'First to 5 points wins';
        playerScoreId.textContent = `Player: 0`;
        computerScoreId.textContent = `Computer: 0`;
}
