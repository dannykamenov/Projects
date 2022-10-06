function rps(playerTurn) {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";
  if (playerTurn === "r" || playerTurn === "rock") {
    playerTurn = rock;
  } else if (playerTurn === "p" || playerTurn === "paper") {
    playerTurn = paper;
  } else if (playerTurn === "scissors" || playerTurn === "s") {
    playerTurn = scissors;
  } else {
    console.log("Invalid input. Try Again...");
    return;
  }

  let computerMove = Math.floor(Math.random() * 3) + 1;
  switch (computerMove) {
    case 1:
      computerMove = rock;
      break;
    case 2:
      computerMove = paper;
      break;
    case 3:
      computerMove = scissors;
      break;
  }
  console.log(`You choose ${playerTurn}`);
  console.log(`The computer chooses ${computerMove}`);

  if (
    (playerTurn === rock && computerMove === scissors) ||
    (playerTurn === paper && computerMove === rock) ||
    (playerTurn === scissors && computerMove === paper)
  ) {
    console.log("You win!");
  } else if (
    (computerMove === rock && playerTurn === scissors) ||
    (computerMove === paper && playerTurn === rock) ||
    (computerMove === scissors && playerTurn === paper)
  ) {
    console.log("You lose!");
  } else {
    console.log("This game was a draw!");
  }
}

rps("s");
