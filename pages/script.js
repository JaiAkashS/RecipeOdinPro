const choices = ["rock", "scissors", "paper"];
let humanPoint = 0;
let computerPoint = 0;

function getComputerChoice() {
    const ch = Math.floor(Math.random() * 3);
    return choices[ch];
}

function getHumanChoice() {
    return prompt("Enter Choice:");
}

function play() {
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    
    console.log("Human:", humanChoice);
    console.log("Computer:", computerChoice);
    
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanPoint++;
        console.log("Human Wins!");
    } else {
        computerPoint++;
        console.log("Computer Wins!");
    }
}

for (let n = 0; n < 5; n++) {
    play();
}

if (humanPoint < computerPoint) {
    console.log("Computer Wins the Game!");
} else if (humanPoint > computerPoint) {
    console.log("Human Wins the Game!");
} else {
    console.log("It's a Tie!");
}
