const randomLetter =""
const winsCounter  =  0;// change to lets
const losesCounter =  0;
const usersGuesses  =  "";
const lettersGuessed = [];
const numberGuesses = 9;


const letters = ["a","b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", 
"y", "z"];



function randomLetterChoice() {
    return computerChoice = letters[Math.floor(Math.random()*letters.length)];
}

function resetGame(){
  numberGuesses = 9;
  Guessed       = [];
  randomLetterChoice();
}

randomLetterChoice();

document.onkey = function(event){
 
  const usersGuesses = event.key.toLowerCase();
   console.log("Computer Letter:" + randomLetter ) ;
   console.log("User Guesses:" + usersGuesses);

}
if (letters.indexOf(usersGuesses.toLowerCase()) !== -1 ){

if(usersGuesses !== computerChoice){
  numberGuesses --;
    console.log("Number Guesses: " + numberGuesses);
    letterGuessed.push(userGuess);
    console.log(lettersGuessed);
}
if (userGuess === computerChoice) {
  alert( "Correct" + computerChoice + "!")
  wins++;
  console.log("wins:" + wins)
  resetGamae();
}
if (numberGuesses === 0) {
  alert("wrong" + computerChoice + "play again!");
  losses++;
    console.log("Loses:" + losses);
    resetGame();
}
}
else {
  alert("Press any letter to start the game!");
}
document.getElementById("number-text").textContent = "Guesses Left:" + numberGuesses;
document.getElementById("letters-text").textContent = "Letters Used:" + lettersGuessed;
document.getElementById("win-text").textContent = "Win:" + winsCounter;
document.getElementById("losses-text").textContent = "Losses:" + losesCounter;