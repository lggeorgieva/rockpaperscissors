let humanScore = 0; 
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.34) return "rock";
  if (randomNumber < 0.67) return "paper";
  return "scissors";
}

const resultsElement = document.querySelector('#results');
const scoreElement = document.querySelector('#score');

function updateScoreboard() {
  scoreElement.textContent = "Score: Player " + humanScore + " - Computer " + computerScore + " (Round " + roundsPlayed + "/" + maxRounds + ")";
}

function endGame() {
  // Decide winner
  let finalMsg = "";
  if (humanScore > computerScore) {
    finalMsg = "Game over! You win " + humanScore + " to " + computerScore + ".";
  } else if (computerScore > humanScore) {
    finalMsg = "Game over! Computer wins " + computerScore + " to " + humanScore + ".";
  } else {
    finalMsg = "Game over! It's a tie: " + humanScore + " - " + computerScore + ".";
  }
  resultsElement.textContent = finalMsg;

  // Disable buttons
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function playRound(humanChoice, computerChoice) {
  const humanLower = humanChoice.toLowerCase();

  let roundResult = "";
  if (humanLower === computerChoice) {
    roundResult = "tie";
    resultsElement.textContent = "It is a tie. Both chose " + computerChoice + ".";
  } else if (
    (humanLower === "rock" && computerChoice === "scissors") ||
    (humanLower === "paper" && computerChoice === "rock") ||
    (humanLower === "scissors" && computerChoice === "paper")
  ) {
    roundResult = "human";
    humanScore += 1;
    resultsElement.textContent = "You win! " + humanLower + " beats " + computerChoice + ".";
  } else {
    roundResult = "computer";
    computerScore += 1;
    resultsElement.textContent = "You lose! " + computerChoice + " beats " + humanLower + ".";
  }

  // Count this round
  roundsPlayed += 1;
  updateScoreboard();

  // Stop after 5 rounds
  if (roundsPlayed >= maxRounds) {
    endGame();
  }
}

// Wire up buttons AFTER functions are defined (and after DOM exists)
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));

// Initialize scoreboard text
updateScoreboard();

document.querySelector('#reset')?.addEventListener('click', () => {
  humanScore = 0; computerScore = 0; roundsPlayed = 0;
  rockBtn.disabled = paperBtn.disabled = scissorsBtn.disabled = false;
  resultsElement.textContent = "New game started.";
  updateScoreboard();
});
