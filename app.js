/*-------------------------------- Constants --------------------------------*/
const puzzle1_correct_answer= "Rb1Kd2Rb2Kd3Rd1"

const puzzle2_correct_answer= "Bd5Kh8Qh5Bh6Qh6"

const inputVerifyPieceNext = [0, 3, 6, 9, 12];
const inputVerifyColumnNext = [1, 4, 7, 10, 13]
const inputVerifyRowNext = [2, 5, 8, 11, 14]

const pieces = ["K", "Q", "R", "B", "N", "P"];
const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
let currentRow
/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const messageInputEl = document.querySelector('#input-message');

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
const backspaceBtnEl = document.querySelector('#backspace');
/*-------------------------------- Functions --------------------------------*/
function init(){
    user_input_1 = ""
    user_input_2 = ""
    user_input_3 = ""
    user_input_4 = ""
    user_input_5 = ""
    unsubmitted_Guess = ""
    rowOne.textContent = ""
    rowTwo.textContent = ""
    rowThree.textContent = ""
    rowFour.textContent = ""
    rowFive.textContent = ""
    winner = false
    attempt_number = 0
    game_over = false
    messageInputEl.textContent = "---"
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
  if (unsubmitted_Guess.length < 15){
    messageInputEl.textContent = "submit all moves"
  }
  else {if (attempt_number == 0) currentRow = rowOne;
    else if (attempt_number == 1) currentRow = rowTwo;
    else if (attempt_number == 2) currentRow = rowThree;
    else if (attempt_number == 3) currentRow = rowFour;
    else if (attempt_number == 4) currentRow = rowFive;

    if (unsubmitted_Guess === puzzle2_correct_answer) {
      currentRow.style.color = "green";
    } else {
      currentRow.style.color = "orange";
    }
    updateUserinput()
    increaseAttempt()
    checkForWin()
    checkForGameOver()
    updateMessage();
}}


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

function handleinputverification(event){
  if (inputVerifyPieceNext.includes(unsubmitted_Guess.length) && !pieces.includes(event.target.dataset.key)){
    messageInputEl.textContent = "select a piece next"
  }
  else if (inputVerifyColumnNext.includes(unsubmitted_Guess.length) && !columns.includes(event.target.dataset.key)){
    messageInputEl.textContent = "select a column next"
  }
  else if (inputVerifyRowNext.includes(unsubmitted_Guess.length) && !rows.includes(event.target.dataset.key)){
    messageInputEl.textContent = "select a row next"
  }
  else if (unsubmitted_Guess.length >= 15){
    messageInputEl.textContent = "max length"
  }
  else {
    handleKeyBoardClick(event);
    messageInputEl.textContent = "---"
}}


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
function handleBackspace(){
  unsubmitted_Guess = unsubmitted_Guess.slice(0, -1)
  if (attempt_number == 0){
    rowOne.textContent = rowOne.textContent.slice(0, -1)
  }
  if (attempt_number == 1){
    rowTwo.textContent = rowTwo.textContent.slice(0, -1)
  }
  if (attempt_number == 2){
    rowThree.textContent = rowThree.textContent.slice(0, -1)
  }
  if (attempt_number == 3){
    rowFour.textContent = rowFour.textContent.slice(0, -1)
  }
  if (attempt_number == 4){
    rowFive.textContent = rowFive.textContent.slice(0, -1)
  }
}

init();
/*----------------------------- Event Listeners -----------------------------*/

keyEls.forEach((key) => {
  key.addEventListener('click', handleinputverification)
})

submitBtnEl.addEventListener('click', handleSubmit)


resetBtnEl.addEventListener('click', init)

backspaceBtnEl.addEventListener('click', handleBackspace)