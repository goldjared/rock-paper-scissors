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
    let gameTitle = document.querySelector('.title');
    const container = document.querySelector('.container');
    if (roundResult === 'Win!') {
        playerPoints += 1;
    } else if (roundResult === 'Loss') {
        cpuPoints += 1;
    }
    const score = document.querySelector('.score');
    score.textContent = `Player: ${playerPoints} CPU: ${cpuPoints}`;
    if (playerPoints === 5 || cpuPoints === 5) { 
        document.querySelectorAll('.btn').forEach(element => element.disabled = true);//disables all buttons
        const resetButton = document.createElement('INPUT');
        resetButton.setAttribute('type', 'button');
        resetButton.setAttribute('value', 'Reset');
        resetButton.classList.add('resetButton');
        container.appendChild(resetButton);
        console.log(container);
        console.log(resetButton);
        resetButton.addEventListener('click', function() {
            location.reload();
        })
    }
    if (playerPoints === 5) {
        gameTitle.textContent = `YOU BEAT THE CPU. In ${cpuPoints + playerPoints} rounds...`;
        gameTitle.style.cssText = 'color: green; font-size: 33px;';
    } else if (cpuPoints === 5) {
        gameTitle.textContent = `YOU WERE DEFEATED BY THE CPU. In ${cpuPoints + playerPoints} rounds...`;
        gameTitle.style.cssText = 'color: red; font-size: 16px;';
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