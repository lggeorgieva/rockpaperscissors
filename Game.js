function getComputerChoice() {
    const randomNumber = Math.random();

    if(randomNumber < 0.34){
        return "rock";
    }
    else if(randomNumber< 0.67){
        return "paper";

    }
    else{
        return "scissors";
    }
    console.log("Get computer choice.")
}


function getHumanChoice(){
    const userInput = prompt("Please enter rock, paper, or scissors: ");
    return userInput;
}


function playRound(humanChoice, computerChoice){

    const humanLower = humanChoice.toLowerCase();
    if( humanChoice === computerChoice){
        console.log("It is a tie. Both  chose " + computerChoice);
        return "tie";

    }
    else if (
        (humanLower ==="rock" && computerChoice =="scissors") ||
        (humanLower === "paper" && computerChoice ==="rock") ||
        (humanLower === "scissors" && computerChoice === "paper")
    ) {
    console.log("You win! " +  humanLower +  " beats " + computerChoice);
    return "human";}

else {
    console.log("You lose! " +  computerChoice +  " beats " + humanLower);
    return(" computer");
}}





function playGame(){

let humanScore = 0; 
let computerScore = 0;



function playSingleRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanSelection, computerSelection);

if(roundResult ==="human"){
    humanScore++;

}
else if(roundResult === "computer"){
    computerScore ++;
} 
console.log( "Score human: " + humanScore + " Score computer: " + computerScore );
}

playSingleRound();
playSingleRound();
playSingleRound();
playSingleRound();
playSingleRound();

if( humanScore > computerScore){
    console.log("Congratulations! You win the game with a score of " + humanScore + " to " + computerScore);

} else if (computerScore > humanScore){
    console. log(" Game over! Computer won the game with a score of " + computerScore + " to " + humanScore);

}
else{
    console.log("It is a tie! ");
}
}








