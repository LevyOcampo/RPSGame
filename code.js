var playerScore = 0;
var computerScore = 0;

const playScore = document.querySelector('#playScore')
const comScore = document.querySelector('#comScore')
const gameText = document.querySelector('#gameText')

const playerSc = document.createElement('p');
playerSc.classList.add('playScore');
playerSc.style.color ="blue";
playerSc.textContent = "Your Score: "+playerScore;
playScore.appendChild(playerSc);

const compSc = document.createElement('p');
compSc.classList.add('comScore');
compSc.style.color = "red";
compSc.textContent = "Computer Score: "+computerScore;
comScore.appendChild(compSc);

const gameEvent = document.createElement('p');
gameEvent.classList.add('gameText');
gameEvent.textContent="Lets get started. You make the first move!";
gameText.appendChild(gameEvent);


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


function playRound(playerSelection, computerSelection){
    if(computerScore==5 || playerScore==5){
         finalVerdict();
    }
    else{
        if(playerSelection == "rock"){

            if(computerSelection == "Rock"){
                display("It's a tie");
            } else if(computerSelection == "Paper"){
                computerScore++;
                display("Paper beats Rock, Sorry you lose");
            }else{
                playerScore++;
                display("Rock beats Scissors, Congrats you win");
            }
    
        } else if(playerSelection == "paper"){
    
            if(computerSelection == "Rock"){
                playerScore++;
                display("Paper beats Rock, Congrats you win");
            } else if(computerSelection == "Paper"){
                display("It's a tie");
            }else{
                computerScore++;
                display("Scissors beats Paper, Sorry you lose");
            }
    
        }else if(playerSelection == "scissors"){
    
            if(computerSelection == "Rock"){
                computerScore++;
                display("Rock beats Scissors, Sorry you lose");
            } else if(computerSelection == "Paper"){
                playerScore++;
                display("Scissors beats Paper, Congrats you win");
        
            }else{
                display("It's a tie");
            }
    
        }
        
    }

}


function finalVerdict(){
    if(playerScore>computerScore){
        display("Congrats you win! Your score: " +playerScore+ " Computer score: " +computerScore)
    }else if(computerScore>playerScore){
        display("Sorry you lose. Your score: " +playerScore+ " Computer score: " +computerScore)
    }else{
        display ("It's a tie! Your score: " +playerScore+ " Computer score: " +computerScore)
    }
}

function display(result){
    playerSc.textContent = "Your Score: "+playerScore;
    playScore.appendChild(playerSc);

    compSc.textContent = "Computer Score: "+computerScore;
    comScore.appendChild(compSc); 

    gameEvent.textContent=result;
    gameText.appendChild(gameEvent);
    
}

document.getElementById("Rock").addEventListener("click", function(){
        playRound("rock",getComputerChoice());
});

document.getElementById("Paper").addEventListener("click", function(){
        playRound("paper",getComputerChoice());
});

document.getElementById("Scissors").addEventListener("click", function(){
        playRound("scissors",getComputerChoice());
});
