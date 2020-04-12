let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 10);
};
function getAbsoluteDistance(target,guess){
  return Math.abs(target-guess);
};
function compareGuesses(human,computer,target){
  if(human>=0 && human<=10){
     if(human === computer){
        return true;
    }else if(getAbsoluteDistance(target,human)<getAbsoluteDistance(target,computer)){
    return true;
  }else{
    return false;
  }
  }else{
    window.alert("Please make sure your guess is between 0 and 9");
  }
 
};
function updateScore(winner){
  if(winner === "human"){
    humanScore ++;
  }else{
    computerScore ++;
  }
};
function advanceRound(){
  currentRoundNumber ++;
};