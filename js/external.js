function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomValue = choices[Math.floor(Math.random() * choices.length)];
    return randomValue;
}
console.log(getComputerChoice())

let playerChoice = prompt("Rock, Paper, or Scissor?", "");