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
    if(playerSelection == "Rock"){

        if(computerSelection == "Rock"){
            return "It's a tie"
        } else if(computerSelection == "Paper"){
            return "Paper beats Rock, Sorry you lose"
        }else{
            return "Rock beats Scissors, Congrats you win"
        }

    } else if(playerSelection == "Paper"){

        if(computerSelection == "Rock"){
            return "Paper beats Rock, Congrats you win"
        } else if(computerSelection == "Paper"){
            return "It's a tie"
        }else{
            return "Scissors beats Paper, Sorry you lose"
        }

    }else if(playerSelection == "Scissors"){

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