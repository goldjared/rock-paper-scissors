


function computerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomValue = choices[Math.floor(Math.random() * choices.length)];
    return randomValue;
}
console.log(computerChoice())