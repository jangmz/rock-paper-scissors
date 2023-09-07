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

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "player wins";
            } else if (computerSelection === "rock") {
                return "tie";
            } else {
                return "computer wins";
            }
        case "paper":
            if (computerSelection === "scissors") {
                return "computer wins";
            } else if (computerSelection === "rock") {
                return "player wins";
            } else {
                return "tie";
            }
        case "scissors":
            if (computerSelection === "scissors") {
                return "tie";
            } else if (computerSelection === "rock") {
                return "computer wins";
            } else {
                return "player wins";
            }
    }
}

function game() {
    let player;
    let computer;

    for (let i = 0; i < 5; i++) {
        player = getPlayerChoice();
        computer = getComputerChoice();
        console.log("Round:", i + 1);
        console.log("Player:", player);
        console.log("Computer:", computer);
        console.log(playRound(player, computer));
    }
}

function history(playerSelection, computerSelection, result) {
    const history = document.querySelector("#history");
    const p = document.createElement("p");
    p.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}, Result: ${result}`;
    history.appendChild(p);
}

// displays result in a div
function displayResult(result, playerSelection, computerSelection) {
    const playerPoints = document.querySelector("#playerScore");
    const computerPoints = document.querySelector("#computerScore");

    if (result === "player wins") {
        playerScore++;
        playerPoints.textContent = playerScore;
    } else if (result === "computer wins") {
        computerScore++;
        computerPoints.textContent = computerScore;
    }

    history(playerSelection, computerSelection, result);
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const div = document.querySelector("#gameover");
        const h1 = document.createElement("h1");
        if (playerScore === 5) {
            h1.textContent = "YOU WON!";
        } else {
            h1.textContent = "GAME OVER, YOU LOST!";
        }
        div.appendChild(h1);
        return true;
    } else return false;
}

let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", function(event) {
    playerSelection = event.target.id;

    // plays a round when a button is clicked
    //console.log(playRound(playerSelection));
    displayResult(playRound(playerSelection), playerSelection, computerSelection);
    if (checkWinner()) {
        const div = document.querySelector("#gameover");
        const reloadBtn = document.createElement("button");
        reloadBtn.textContent = "START AGAIN";
        reloadBtn.addEventListener("click", () => {
            window.location.reload(true);
        });
        div.appendChild(reloadBtn);
    }
}));