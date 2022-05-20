let choices = ["rock", "paper", "scissors"]
let computerPlay = () => choices[Math.floor(Math.random() * choices.length)]

console.log(computerPlay())