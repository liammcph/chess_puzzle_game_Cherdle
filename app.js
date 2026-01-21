/*-------------------------------- Constants --------------------------------*/
const puzzle1_correct_answer= ["Rb1", "Kd2", "Rb2", "Kd3", "Rd1"]

const puzzle2_correct_answer= ["Bd5", "Kh8", "Qh5", "Bh6", "Qh6"]
/*---------------------------- Variables (state) ----------------------------*/
let winner;
let attempt_number;
let user_input;
let game_over
/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message');
const guessesEl = document.querySelector('#guesses');                 
const guessRowEls = document.querySelectorAll('.guess-row');          
const moveInputEls = document.querySelectorAll('input.move'); 
const submitBtnEl = document.querySelector('#submit');
const keyboardEl = document.querySelector('#keyboard');
const resetBtnEl = document.querySelector('#reset');
/*-------------------------------- Functions --------------------------------*/
function init(){
    user_input = ['', '', '', '', '',] 
    winner = false
    attempt_number = 0
    game_over = false
    render();
}

function render(){
    console.log("rendering")
    updateGuessPanel();
    updateMessage();
} 

function updateGuessPanel(){
   user_input.forEach((element, index) => {const squareEl = squareEls[index];
    squareEl.textContent = element;})
}

function updateMessage(){
     if (winner == false && game_over == false){
        messageEl.textContent = ""
     }
     else if (winner == false && game_over == true){
        messageEl.textContent = "Game over"
     }
     else if (winner ==true){
        messageEl.textContent = "You Win"
     }

}

 function handleKeyBoardClick(event){
 }



function handleSubmit(event){
    checkForWin()
    checkForGameOver()
    increaseAttempt()
    render()
}

function increaseAttempt(){
    attempt_number += 1
}


function checkForWin() {
  if (puzzle2_correct_answer == user_input){
    winner = true}
}

function checkForGameOver() {
  if (attempt_number >= 5){
    game_over= true
  }
  
}


init();
/*----------------------------- Event Listeners -----------------------------*/

keyboardEl.forEach((key) => {
  key.addEventListener('click', handleKeyBoardClick)
})

submitBtnEl.addEventListener('click', handleSubmit)


resetBtnEl.addEventListener('click', init)