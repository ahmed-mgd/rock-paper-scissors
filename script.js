/**
 * Randomly chooses between rock, paper, and scissors and returns that choice.
 * 
 * @returns random choice of rock, paper, or scissors
 */
function getComputerChoice() {
    return Math.floor(3 * Math.random());
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
    const difference = playerSelection - computerSelection;
    const choices = ["ROCK", "PAPER", "SCISSORS"];

    if (difference === 0) {
        return `Tie! Both parties chose ${choices[playerSelection]}.`;
    } else if (difference === 1 || difference === -2) {
        return `You win! ${choices[playerSelection]} beats ${choices[computerSelection]}.`; 
    } else {
        return `You lose! ${choices[computerSelection]} beats ${choices[playerSelection]}.`; 
    }
}

/**
 * Runs an instance of a rock, paper, scissors game.
 */
function game() {
    // Target player buttons
    const playerButtons = document.querySelectorAll(".p-button");
    playerButtons.forEach(function(currentValue, currentIndex) {
        currentValue.addEventListener("click", () => {
            currentValue.setAttribute("style", "display: none;")
            result = playRound(currentIndex, getComputerChoice());
    
            // Output results
            const resultText = document.getElementById("result-text");
            resultText.innerHTML = result;
    
            // Update score
            if (result.indexOf("win") > 0) {
                numWins++;
            } else if (result.indexOf("lose") > 0) {
                numLosses++;
            }
        })
    });
    
    // const rock = document.querySelector("#player-r");
    // const paper = document.querySelector("#player-p");
    // const scissors = document.querySelector("#player-s");

    let result;

    let numGames = 5;
    let numWins = 0;
    let numLosses = 0;

    while (numWins < 5 || numLosses < 5) {
        // TODO: Prompt user for choice

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

const start = document.getElementById("start");
start.addEventListener('click', () => {
    start.style.display = "none";
    game();
})