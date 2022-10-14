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
            return "Paper beats Rock, Sorry you lose"
        }else{
            return "Rock beats Scissors, Congrats you win"
        }

    } else if(playerSelection == "paper"){

        if(computerSelection == "Rock"){
            return "Paper beats Rock, Congrats you win"
        } else if(computerSelection == "Paper"){
            return "It's a tie"
        }else{
            return "Scissors beats Paper, Sorry you lose"
        }

    }else if(playerSelection == "scissors"){

        if(computerSelection == "Rock"){
            return "Rock beats Scissors, Sorry you lose"
        } else if(computerSelection == "Paper"){
            return "Scissors beats Paper, Congrats you win"
    
        }else{
            return "It's a tie"
        }

    }else{
        return "Please enter a valid play"
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));