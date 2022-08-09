// computer chooses their option
let choices = ["rock", "paper", "scissors"];
let computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

// create event listeners for each button
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("running-score");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const tieScoreSpan = document.getElementById("tie-score");

rockBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playOneGame(playerSelection, computerSelection);
})
paperBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playOneGame(playerSelection, computerSelection);
})
scissorsBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "scissors";
    playOneGame(playerSelection, computerSelection);
})
// set score for best-of-5 series
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// play single game of RPS
let playOneGame = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "paper") {
        const p = document.createElement("p");
        p.innerText = "You lost! " + computerSelection + " beats " + playerSelection + ".";
        resultDiv.appendChild(p);
        computerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        const p = document.createElement("p");
        p.innerText = "You won! " + playerSelection + " beats " + computerSelection + ".";
        resultDiv.appendChild(p);
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        const p = document.createElement("p");
        p.innerText = "You won! " + playerSelection + " beats " + computerSelection + ".";
        resultDiv.appendChild(p);
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        const p = document.createElement("p");
        p.innerText = "You lost! " + computerSelection + " beats " + playerSelection + ".";
        resultDiv.appendChild(p);
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        const p = document.createElement("p");
        p.innerText = "You lost! " + computerSelection + " beats " + playerSelection + ".";
        resultDiv.appendChild(p);
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        const p = document.createElement("p");
        p.innerText = "You won! " + playerSelection + " beats " + computerSelection + ".";
        resultDiv.appendChild(p);
        playerScore++;
    }
    else {
        const p = document.createElement("p");
        p.innerText = "Its a tie!";
        resultDiv.appendChild(p);
        tieScore++;
    }
    updateScores(playerScore, computerScore, tieScore);
    checkForWinner(playerScore, computerScore);
};

let updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = "Player Score: " + playerScore;
    computerScoreSpan.innerText = "Computer Score: " + computerScore;
    tieScoreSpan.innerText = "Tie Games: " + tieScore;
}

let checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5){
        const h2 = document.createElement("h2");
        h2.innerText = "Congratulations! You won " + playerScore + " to " + computerScore + " in a Best of 5 series!";
        resultDiv.appendChild(h2);
    }
    if (computerScore === 5){
        const h2 = document.createElement("h2");
        h2.innerText = "Oh no! You lost " + playerScore + " to " + computerScore + " in a Best of 5 series... You stink!";
        resultDiv.appendChild(h2);
    }
}

// play 5 games of RPS using for loop --> calculate win totals

// let fiveGames = () => {
//     for (let i = 0; i < 5; i++) {
//         // define Computer selection
//         let computerSelection = computerPlay();         
//         // let playerSelection = prompt("Please select an option: Rock, Paper, or Scissors?").toLowerCase()
        
//         let playerSelection = "rock";
//         console.log("Player Selection - NEW: " + playerSelection);

//         console.log("Game: " + (i+1));
//         playOneGame(playerSelection, computerSelection);
//         console.log("Scores | Player: " + playerScore + "; Computer: " + computerScore);
//     }
//     if (playerScore > computerScore) {
//         console.log("Overall Winner: Player (" + playerScore + ")");
//     }
//     else if (playerScore < computerScore) {
//         console.log("Overall Winner: Computer (" + computerScore + ")");
//     }
//     else {
//         console.log("It's a tie! Everybody Wins!");
//     }
// };

// fiveGames();

// ===================================================