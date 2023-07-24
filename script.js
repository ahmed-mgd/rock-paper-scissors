/**
 * Randomly chooses between rock, paper, and scissors and returns that choice.
 * 
 * @returns random choice of rock, paper, or scissors
 */
function getComputerChoice() {
    switch(Math.floor(3 * Math.random())) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2: 
            return "SCISSORS";
        default:
            console.error("ERROR: Computer choice out of bounds");
    }

}

/**
 * Converts choice of rock, paper, or scissors to its integer value.
 * 
 * @returns the integer "equivalent" of the R,P,S choice
 */
function choiceToInt(selection) {
    if (selection === "ROCK") {
        return 0;
    } else if (selection === "PAPER") {
        return 1;
    } else {
        return 2;
    }
}

/**
 * Determines the winner of a round of rock, paper, scissors. 
 * Calculates the difference (playerInt - computerInt) 
 * and use the following logic to determine winner:
 * 
 * If difference = 0, the parties tie. 
 * If difference is 1 or -2, the player wins.
 * Otherwise, the computer wins.
 * 
 * @returns the result of the round with each party's choice
 */
function playRound(playerSelection, computerSelection) {
    const playerSelectionUpper = playerSelection.toUpperCase();
    const playerInt = choiceToInt(playerSelectionUpper);
    const computerInt = choiceToInt(computerSelection);
    const difference = playerInt - computerInt;

    if (difference === 0) {
        return `Tie! Both parties chose ${playerSelectionUpper}.`;
    } else if (difference === 1 || difference === -2) {
        return `You win! ${playerSelectionUpper} beats ${computerSelection}.`; 
    } else {
        return `You lose! ${computerSelection} beats ${playerSelectionUpper}.`; 
    }
}

/**
 * Runs an instance of a rock, paper, scissors game.
 */
function game() {
    let numGames = 5;
    let numWins = 0;
    let numLosses = 0;

    for (let i = 0; i < numGames; i++) {
        // Prompt user for choice
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");

        // Output results
        const result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        console.log();

        // Update score
        if (result.indexOf("win") > 0) {
            numWins++;
        } else if (result.indexOf("lose") > 0) {
            numLosses++;
        }
    }
    
    // Final results
    const numTies = numGames - (numWins + numLosses);
    console.log("GAME SUMMARY");
    console.log("------------")
    console.log("Wins:" + numWins);
    console.log("Losses:" + numLosses);
    console.log("Ties:" + numTies);

    if (numWins > numLosses) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}