function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

//console.log(getComputerChoice());
/*let result;
let container = document.querySelector('#container');
let buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function() {
            console.log(button.value);
            let playerSelection = button.value;
            let computerSelection = getComputerChoice();
            (playRound(playerSelection, computerSelection));
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `${result}`;
            container.appendChild(content);


            //console.log(playRound(playerSelection, computerSelection));
            

    });
  }); */
//https://www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/

let buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function() {
            //console.log('player selection is', button.value);
            let playerSelection = button.value;
            let computerSelection = getComputerChoice();
            //console.log('computerSelection is', computerSelection)
            //console.log(playRound(playerSelection, computerSelection));
            let roundResult = playRound(playerSelection, computerSelection);
            //playRound(playerSelection, computerSelection); not needed?
            const resultContainer = document.querySelector('#container');
            const results = document.createElement('div');
            results.classList.add('results');
            results.textContent = `Player: ${playerSelection}, CPU: ${computerSelection},
            RESULT: ${roundResult}`.toUpperCase();
            resultContainer.appendChild(results);
            results.style.color = 'red';
        });
    });

 







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