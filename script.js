const buttons = document.querySelectorAll(".choice-btn");
const playerIcon = document.getElementById("player-icon");
const computerIcon = document.getElementById("computer-icon");
const resultText = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerscore");
const computerScoreDisplay = document.getElementById("computerscore");

let playerscore = 0;
let computerscore = 0;

const icons = {
  Rock: "✊",
  Paper: "✋",
  Scissors: "✌️",
};

function getComputerChoice() {
  const choices = Object.keys(icons);
  const idx = Math.floor(Math.random() * choices.length);
  return choices[idx];
}

function determineWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateUI(playerChoice, computerChoice, winner) {
  playerIcon.textContent = icons[playerChoice];
  computerIcon.textContent = icons[computerChoice];

  if (winner === "player") {
    resultText.textContent = "PLAYER WINS!";
    playerscore++;
  } else if (winner === "computer") {
    resultText.textContent = "COMPUTER WINS!";
    computerscore++;
  } else {
    resultText.textContent = "CURRENTLY DRAW!";
  }

  playerScoreDisplay.textContent = playerscore;
  computerScoreDisplay.textContent = computerscore;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, winner);
  });
});
