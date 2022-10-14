var playerScore = 0;
var computerScore = 0;

function getComputerChoice(){
    x = Math.floor(Math.random()*91)
    if(x<=30){
        return "Rock"
    }
    else if (x<=60 && x>=31){
        return "Paper"
    } else{
        return "Scissors"
    }
}


function getPlayerChoice(){
    let choice = prompt("Choose Rock, Paper or Scissors");
    choice = choice.toLowerCase();
    if(choice == "rock" || "paper" || "scissors"){
        return choice;
    } else {
        console.log("please choose a proper play, try again");
        getPlayerChoice();
    }
}   


function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){

        if(computerSelection == "Rock"){
            return "It's a tie"
        } else if(computerSelection == "Paper"){
            computerScore++;
            return "Paper beats Rock, Sorry you lose"
        }else{
            playerScore++
            return "Rock beats Scissors, Congrats you win"
        }

    } else if(playerSelection == "paper"){

        if(computerSelection == "Rock"){
            playerScore++
            return "Paper beats Rock, Congrats you win"
        } else if(computerSelection == "Paper"){
            return "It's a tie"
        }else{
            computerScore++
            return "Scissors beats Paper, Sorry you lose"
        }

    }else if(playerSelection == "scissors"){

        if(computerSelection == "Rock"){
            computerScore++
            return "Rock beats Scissors, Sorry you lose"
        } else if(computerSelection == "Paper"){
            playerScore++
            return "Scissors beats Paper, Congrats you win"
    
        }else{
            return "It's a tie"
        }

    }else{
        return "Please enter a valid play"
    }
}


function game(){
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
            
    if(playerScore>computerScore){
        return "congrats you win! Your score: " +playerScore+ " Computer score: " +computerScore
    }else if(computerScore>playerScore){
        return "sorry you lose. Your score: " +playerScore+ " Computer score: " +computerScore
    }else{
        return "it's a tie! Your score: " +playerScore+ " Computer score: " +computerScore
    }
}

console.log(game());