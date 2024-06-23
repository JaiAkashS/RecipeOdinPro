const choices = ["rock", "scissors", "paper"];
let humanPoint = 0;


function getComputerChoice() {
    const ch = Math.floor(Math.random() * 3);
    return choices[ch];
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => play(button.className));
});

function play(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.querySelector(".result");
    const hChoiceDiv = document.querySelector(".hChoice");    
    const cChoiceDiv = document.querySelector(".cChoice");
    const hpointDiv = document.querySelector(".hpoint");

    console.log("Human:", humanChoice);
    console.log("Computer:", computerChoice);
    
    hChoiceDiv.textContent = `Human choice: ${humanChoice}`;
    cChoiceDiv.textContent = `Computer choice: ${computerChoice}`;
    
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanPoint++;
        resultDiv.textContent = "Human Wins!";
    } else {
        resultDiv.textContent = "Computer Wins!";
    }
    
    hpointDiv.textContent = `Human Points: ${humanPoint}`;

}
