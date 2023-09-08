// Target player buttons
const rock = document.querySelector("#player-r");
const paper = document.querySelector("#player-p");
const scissors = document.querySelector("#player-s");

rock.addEventListener("click", () => {
    playRound(0, getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound(1, getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound(2, getComputerChoice());
});