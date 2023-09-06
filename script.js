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
    let computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}`);
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

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", function(event) {
    console.log(`Player ${event.target.id}`); // displays the id of the clicked button
    
    // plays a round when a button is clicked
    console.log(playRound(event.target.id));
}));

//game();