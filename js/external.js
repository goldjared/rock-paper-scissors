function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

let buttons = document.querySelectorAll('.btn');
let playerPoints = 0;
let cpuPoints = 0;
let result = document.querySelector('.result');
let score = document.querySelector('.score');
buttons.forEach(function (button) {
    button.addEventListener('click', function() {
            let playerSelection = button.value;
            let computerSelection = getComputerChoice();
            let roundResult = playRound(playerSelection, computerSelection);
            result.textContent = `Player: ${playerSelection} CPU: ${computerSelection}
            RESULT: ${roundResult}`.toUpperCase();
            game(roundResult);
        });
    });

function game(roundResult) {
    if (roundResult === 'Win!') {
        playerPoints += 1;
    } else if (roundResult === 'Loss') {
        cpuPoints += 1;
    }
    const score = document.querySelector('.score');
    score.textContent = `Player: ${playerPoints} CPU: ${cpuPoints}`;
    if (playerPoints === 5 || cpuPoints === 5) { 
        document.querySelectorAll('input').forEach(element => element.disabled = true);//disables all buttons
    }
    if (playerPoints === 5) {
        //left off
    }

}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                return 'Tie';
            case 'paper':
                return 'Loss';
            case 'scissors':
                return 'Win!';   
                    }          
    } else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock':
                return 'Win!';
            case 'paper':
                return 'Tie';
            case 'scissors':
                return 'Loss';   
                    }
    } else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock':
                return 'Loss';
            case 'paper':
                return 'Win!';
            case 'scissors':
                return 'Tie';  
                    } 
    }  else {
        return 'Error. Use a valid hand to play';
    }         
    return;

}