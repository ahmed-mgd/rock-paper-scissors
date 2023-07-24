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
    // Set player as winner by default. Set to false if any losing case or tie is met.
    let playerWin = true;
    const playerSelectionLC = playerSelection.toLowerCase;
    if (playerSelection.localeCompare(computerSelection, underfined, { sensitivity: 'accent'} ) == 0) {
        return `Tie! Both parties chose ${playerSelection}`;
    } else {
    }
    if (playerWin) {
        return `You win! ${playerSelection} beats ${computerSelection}`; 
    } else {
        return `You lose! ${computerSelection} beats ${computerSelection}`; 
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
        playRound(playerSelection, getComputerChoice());
    }
}

game();