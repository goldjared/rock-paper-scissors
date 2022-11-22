function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch(true) {
            case computerSelection === 'rock':
                return 'Tie';
            case computerSelection === 'paper':
                return 'Loss. Paper destroys rock.';
            case computerSelection === 'scissors':
                return 'Win! Rock crushes scissors!';   
                    }          
    } else if (playerSelection === 'paper') {
        switch(true) {
            case computerSelection === 'rock':
                return 'Win! Paper destroys rock.';
            case computerSelection === 'paper':
                return 'Tie';
            case computerSelection === 'scissors':
                return 'Loss. Scissors cut paper.';   
                    }
    } else if (playerSelection === 'scissors') {
        switch(true) {
            case computerSelection === 'rock':
                return 'Loss. Rock crushes scissors.';
            case computerSelection === 'paper':
                return 'Win! Scissors cut paper.';
            case computerSelection === 'scissors':
                return 'Tie';  
                    } 
    }  else {
        return 'Error. Use a valid hand to play';
    }         
    return

}


function game() {
        for(let i = 0; i < 5; i++) {
            let playerSelection = prompt('Rock, paper, or scissor?', '').toLowerCase();
            let computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));

        }
}
