// computer chooses their option
let choices = ["rock", "paper", "scissors"]
let computerPlay = () => choices[Math.floor(Math.random() * choices.length)]

// set score for best-of-5 series
let playerScore = 0;
let computerScore = 0;

let playGame = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lost! " + computerSelection + " beats " + playerSelection + ".")
        computerScore++
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You won! " + playerSelection + " beats " + computerSelection + ".")
        playerScore++
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You won! " + playerSelection + " beats " + computerSelection + ".")
        playerScore++
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lost! " + computerSelection + " beats " + playerSelection + ".")
        computerScore++
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lost! " + computerSelection + " beats " + playerSelection + ".")
        computerScore++

    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You won! " + playerSelection + " beats " + computerSelection + ".")
        playerScore++
    }
    else {
        console.log("Its a tie!")
    }
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        // define computer + player selections
        let computerSelection = computerPlay()
        let playerSelection = prompt("Please select an option: Rock, Paper, or Scissors?").toLowerCase()
        console.log("Game: " + (i+1))
        playGame(playerSelection, computerSelection)
        console.log("Scores | Player: " + playerScore + "; Computer: " + computerScore)
    }
    if (playerScore > computerScore) {
        console.log("Overall Winner: Player (" + playerScore + ")")
    }
    else if (playerScore < computerScore) {
        console.log("Overall Winner: Computer (" + computerScore + ")")
    }
    else {
        console.log("It's a tie! Everybody Wins!")
    }
}

game()

