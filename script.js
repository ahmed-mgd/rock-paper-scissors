function getComputerChoice() {
    switch(Math.floor(3 * Math.random())) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
        default:
            console.error("ERROR: Computer choice out of bounds");
    }

}

function playRound(playerSelection, computerSelection) {

}

function game() {

}