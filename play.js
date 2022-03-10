const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let userScore = 0;
let computerScore = 0;
let counter=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

function computerPlay() {
  const values = ["rock", "paper", "scissors"];
  const pickOne = Math.floor(Math.random() * values.length);
  var computerChose = values[pickOne];
  return computerChose;
}

function getWinner(userPick, computerPick) {
  userScore = userScore + 1;
  counter+=1;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "You Win! " + userPick + " beats " + computerPick;
  if (counter==6){
    reset();
  }
}

function getLoser(userPick, computerPick) {
  computerScore = computerScore + 1;
  counter+=1;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "You Lose! " + computerPick + " beats " + userPick;
  if (counter==6){
    reset();
  }
}

function tie(userPick, computerPick) {
  counter+=1;
  result_p.innerHTML = "Its a tie! " + userPick + " equals " + computerPick;
  if (counter==6){
    reset();
  }
}

function singleRound(userPick, computerPick) {
  computerPick = computerPlay();
  //computer picks:rock   player has 3 choices
  if (computerPick == "rock" && userPick == "rock") tie(userPick, computerPick);
  else if (computerPick == "rock" && userPick == "paper")
    getWinner(userPick, computerPick);
  else if (computerPick == "rock" && userPick == "scissors")
    getLoser(userPick, computerPick);
  //computer picks:paper   player has 3 choices
  else if (computerPick == "paper" && userPick == "rock")
    getLoser(userPick, computerPick);
  else if (computerPick == "paper" && userPick == "paper")
    tie(userPick, computerPick);
  else if (computerPick == "paper" && userPick == "scissors")
    getWinner(userPick, computerPick);
  //computer picks:scissors  player had 3 choices
  else if (computerPick == "scissors" && userPick == "rock")
    getWinner(userPick, computerPick);
  else if (computerPick == "scissors" && userPick == "paper")
    getLoser(userPick, computerPick);
  //(computerPick == "scissors" && playerSelection == "scissors")
  else tie(userPick, computerPick);
}

function game() {
  rock_div.addEventListener("click", function () {
    singleRound("rock", computerPlay());
  });

  paper_div.addEventListener("click", function () {
    singleRound("paper", computerPlay());
  });

  scissors_div.addEventListener("click", function () {
    singleRound("scissors", computerPlay());
  });
}

function reset(){
  userScore = 0;
  computerScore = 0;
  counter=0;
  result_p.innerHTML = "Select";
  alert("Over 5 Attempts, Play Again!");
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
}

game();
