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

// displays result in a div
function displayResult(result, playerSelection, computerSelection) {

    const div = document.querySelector("#results");
    const container = document.createElement("div");
    const title = document.createElement("h1");
    const playerInfo = document.createElement("p");
    const computerInfo = document.createElement("p");
    const resultInfo = document.createElement("p");

    title.textContent = "Result";
    playerInfo.textContent = `Player: ${playerSelection}`;
    computerInfo.textContent = `Computer: ${computerSelection}`;
    resultInfo.textContent = `Result of the match: ${result}`;

    container.appendChild(title);
    container.appendChild(playerInfo);
    container.appendChild(computerInfo);
    container.appendChild(resultInfo);

    div.appendChild(container);
}

let computerSelection;
let playerSelection;
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", function(event) {
    playerSelection = event.target.id;

    // plays a round when a button is clicked
    //console.log(playRound(playerSelection));
    displayResult(playRound(playerSelection), playerSelection, computerSelection);
}));

//game();