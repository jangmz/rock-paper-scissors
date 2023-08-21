function getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

function getComputerChoice() {
    let randNum = getRandomNumber(3);
    if (randNum === 0) {
        return "rock";
    } else if (randNum === 1) {
        return "paper";
    } else if (randNum === 2) {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerInput;
    while (true) {
        playerInput = prompt("Choose rock/paper/scissors");
        playerInput = playerInput.toLowerCase();
        if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
            break;
        } else {
            alert("Wrong input! Click OK to try again");
        }
    }
    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "You won!";
            } else if (computerSelection === "rock") {
                return "Tie!";
            } else {
                return "You lost!";
            }
        case "paper":
            if (computerSelection === "scissors") {
                return "You lost!";
            } else if (computerSelection === "rock") {
                return "You won!";
            } else {
                return "Tie!";
            }
        case "scissors":
            if (computerSelection === "scissors") {
                return "Tie!";
            } else if (computerSelection === "rock") {
                return "You lost!";
            } else {
                return "You won!";
            }
    }
}

function game() {
    
}

const player = getPlayerChoice();
const computer = getComputerChoice();

console.log("Player choice:", player);
console.log("Computer choice:", computer);
console.log(playRound(player, computer));