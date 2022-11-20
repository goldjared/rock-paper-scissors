function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissor'];
    const computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
}

function getPlayerChoice() {
    const playerSelection = prompt('Rock, Paper, or Scissor?', '');
    return playerSelection.toLowerCase();
    
}

function playRound(getComputerChoice, getPlayerChoice) {
    let result;
    if (getPlayerChoice === 'rock') {
        switch(true) {
            case getComputerChoice === 'rock':
                result = 'Tie';
                break;
            case getComputerChoice === 'paper':
                result = 'Loss';
                break;
            case getComputerChoice === 'scissor':
                result = 'Win!';   
                break;  
                    }          
    } else if (getPlayerChoice === 'paper') {
        switch(true) {
            case getComputerChoice === 'rock':
                result = 'Win!';
                break;
            case getComputerChoice === 'paper':
                result = 'Tie';
                break;
            case getComputerChoice === 'scissor':
                result = 'Loss';   
                break;  
                    }
    } else if (getPlayerChoice === 'scissor') {
        switch(true) {
            case getComputerChoice === 'rock':
                result = 'Loss';
                break;
            case getComputerChoice === 'paper':
                result = 'Win!';
                break;
            case getComputerChoice === 'scissor':
                result = 'Tie';   
                break;  
                    } 
    }  else {
        result = 'Fatal error. Use a valid hand to play';
    }         
    return result;

}
console.log(playRound(getComputerChoice(), getPlayerChoice()));

function game(playRound) {
    
}