let choices = ["Rock", "Paper", "Scissors"];
let myChoice = document.getElementById("user-choice");
let computerChoise = document.getElementById("computer-choice");
let winnerText = document.getElementById("winner");

function playGame(playerChoise) {
  let computerOption = choices[Math.floor(Math.random() * 3)];

  switch (playerChoise) {
    case "Rock":
      myChoice.textContent = `You pick: Rock ✊ `;
      break;
    case "Paper":
      myChoice.textContent = `You pick: Paper ✋ `;
      break;
    case "Scissors":
      myChoice.textContent = `You pick: Scissors ✌️ `;
      break;
  }

  computerChoise.textContent = `Computer's choice: ${computerOption}`;

  if (computerOption === playerChoise) {
    winnerText.textContent = `You win this 😎`;
  } else {
    winnerText.textContent = `You lose 😒`;
  }
}
