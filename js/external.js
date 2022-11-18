function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomValue = choices[Math.floor(Math.random() * choices.length)];
    return randomValue;
}
console.log(getComputerChoice())

function roundOne () {
    let playerSelection = prompt('Rock, Paper, or Scissor?');
}