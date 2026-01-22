/*-------------------------------- Constants --------------------------------*/
const puzzle1_correct_answer= "Rb1,Kd2,Rb2,Kd3,Rd1"

const puzzle2_correct_answer= "Bd5Kh8Qh5Bh6Qh6"
/*---------------------------- Variables (state) ----------------------------*/
let winner;
let attempt_number;
let user_input_1;
let user_input_2;
let user_input_3;
let user_input_4;
let user_input_5;
let unsubmitted_Guess
let game_over
/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');

const guessesEl = document.querySelector('.guesses');    
const rowOne =  document.querySelector('#input1'); 
const rowTwo =  document.querySelector('#input2'); 
const rowThree =  document.querySelector('#input3'); 
const rowFour =  document.querySelector('#input4'); 
const rowFive =  document.querySelector('#input5'); 

const keyEls = document.querySelectorAll('.key');
const keyboardEl = document.querySelector('#keyboard');

const submitBtnEl = document.querySelector('#submit');
const resetBtnEl = document.querySelector('#reset');
/*-------------------------------- Functions --------------------------------*/
function init(){
    user_input_1 = ""
    user_input_2 = ""
    user_input_3 = ""
    user_input_4 = ""
    user_input_5 = ""
    unsubmitted_Guess = ""
    winner = false
    attempt_number = 0
    game_over = false
    updateMessage();
}

function updateMessage(){
     if (winner == false && game_over == false){
        messageEl.textContent = "---"
     }
     else if (winner == false && game_over == true){
        messageEl.textContent = "Game over"
     }
     else if (winner ==true){
        messageEl.textContent = "You Win"
     }

}
 function handleKeyBoardClick(event){
  if (attempt_number == 0){
   rowOne.textContent += event.target.textContent
   unsubmitted_Guess += event.target.dataset.key
  }
  else if (attempt_number == 1){
   rowTwo.textContent += event.target.textContent
   unsubmitted_Guess += event.target.dataset.key
  }
  else if (attempt_number == 2){
   rowThree.textContent += event.target.textContent
   unsubmitted_Guess += event.target.dataset.key
  }
  else if (attempt_number == 3){
   rowFour.textContent += event.target.textContent
   unsubmitted_Guess += event.target.dataset.key
  }
  else if (attempt_number == 4){
   rowFive.textContent += event.target.textContent
   unsubmitted_Guess += event.target.dataset.key
  }
  
 }

function handleSubmit(event){
    updateUserinput()
    increaseAttempt()
    checkForGameOver()
    checkForWin()
    updateMessage();
}


function updateUserinput(){
if (attempt_number == 0){
  user_input_1 = unsubmitted_Guess
  unsubmitted_Guess = ""
}
else if (attempt_number == 1){
  user_input_2 = unsubmitted_Guess
  unsubmitted_Guess = ""
}
else if (attempt_number == 2){
  user_input_3 = unsubmitted_Guess
  unsubmitted_Guess = ""
}
else if (attempt_number == 3){
  user_input_4 = unsubmitted_Guess
  unsubmitted_Guess = ""
}
else if (attempt_number == 4){
  user_input_5 = unsubmitted_Guess
  unsubmitted_Guess = ""
}
}


function increaseAttempt(){
    attempt_number += 1
}


function checkForWin() {
  if (puzzle2_correct_answer == user_input_1 || puzzle2_correct_answer == user_input_2 || puzzle2_correct_answer == user_input_3 || puzzle2_correct_answer == user_input_4 || puzzle2_correct_answer == user_input_5 ){
    winner = true}
}

function checkForGameOver() {
  if (attempt_number >= 5){
    game_over= true
  }
  
}


init();
/*----------------------------- Event Listeners -----------------------------*/

keyEls.forEach((key) => {
  key.addEventListener('click', handleKeyBoardClick)
})

submitBtnEl.addEventListener('click', handleSubmit)


resetBtnEl.addEventListener('click', init)