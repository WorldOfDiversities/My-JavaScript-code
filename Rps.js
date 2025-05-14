const choices = ["rock", "paper", "scissors"];

let totalScore = 0;
let gameActive = true;

const computerDiv = document.getElementById("computerChoice");
const playerDiv = document.getElementById("playerChoice");
const scoreChangeDiv = document.getElementById("scoreChange");
const totalScoreDiv = document.getElementById("totalScore");

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function decideWinner(player, computer) {
  if (player === computer) return 0;
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return 1;
  }
  return -1;
}

function playRound(playerChoice) {
  if (!gameActive) return;

  const computerChoice = getComputerChoice();

  // Display names instead of emojis
  playerDiv.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  computerDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  // Determine result
  const score = decideWinner(playerChoice, computerChoice);
  totalScore += score;

  // Display score and total
  scoreChangeDiv.textContent = score > 0 ? "+1" : score < 0 ? "-1" : "0";
  totalScoreDiv.textContent = totalScore;
}

// Event listeners for emoji buttons
document.getElementById("rock").onclick = () => playRound("rock");
document.getElementById("paper").onclick = () => playRound("paper");
document.getElementById("scissors").onclick = () => playRound("scissors");

document.getElementById("stopGame").onclick = () => {
    // Reset game state
    gameActive = true;
    totalScore = 0;
  
    // Clear all displayed content
    playerDiv.textContent = "";
    computerDiv.textContent = "";
    scoreChangeDiv.textContent = "";
    totalScoreDiv.textContent = "";
  
    // Change button text
    document.getElementById("stopGame").textContent = "Restart Game";
  };
  
