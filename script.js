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

console.log(getComputerChoice());