function generateMove(){
    const cpuMoves = ["ROCK", "PAPER", "SCISSORS"];
    const rand = Math.floor(Math.random() * 3);
    const cpuMove = cpuMoves[rand];
    playerMove = "";
    if(document.getElementById('rock').checked){
        playerMove = "ROCK";
    }else if(document.getElementById('paper').checked){
        playerMove = "PAPER";
    }else{
        playerMove = "SCISSORS";
    }
    console.log(playRound(playerMove, cpuMove));
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "ROCK"){
        if(computerSelection == "PAPER"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: CPU Wins");
        }else if(computerSelection == "SCISSORS"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: Player Wins");
        }else if(computerSelection == "ROCK"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: Tie");
        }
    }else if(playerSelection == "PAPER"){
        if(computerSelection == "PAPER"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: Tie");
        }else if(computerSelection == "SCISSORS"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: CPU Wins");
        }else if(computerSelection == "ROCK"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: Player Wins");
        }
    }else if(playerSelection == "SCISSORS"){
        if(computerSelection == "PAPER"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: Player Wins");
        }else if(computerSelection == "SCISSORS"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: Tie");
        }else if(computerSelection == "ROCK"){
            alert("Player Move: "+playerSelection+", CPU Move: "+computerSelection+" \nResult: CPU Wins");
        }
    }
}