const randomLetter = ""
let winsCounter = 0;// change to lets
let losesCounter = 0;
let usersGuesses = "";
let lettersGuessed = [];
let numberGuesses = 9;


const letters = ["a", "b", "c", "d", "e", "f", "g", "h",
  "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x",
  "y", "z"];



function randomLetterChoice() {
  return computerChoice = letters[Math.floor(Math.random() * letters.length)];
}

function resetGame() {
  numberGuesses = 9;
  lettersGuessed = [];
  randomLetterChoice();
}

randomLetterChoice();

document.onkeyup = function (event) {

  const usersGuesses = event.key.toLowerCase();
  console.log("Computer Letter:" + randomLetter);
  console.log("User Guesses:" + usersGuesses);


  if (letters.indexOf(usersGuesses.toLowerCase()) !== -1) {

    if (usersGuesses !== computerChoice) {
      numberGuesses--;
      console.log("Number Guesses: " + numberGuesses);
      lettersGuessed.push(usersGuesses);
      console.log(lettersGuessed);
    }
    if (usersGuesses === computerChoice) {
      alert("Correct" + computerChoice + "!")
      winsCounter++;
      console.log("wins:" + winsCounter)
      resetGame();
    }
    if (numberGuesses === 0) {
      alert("wrong" + computerChoice + "play again!");
      losesCounter++;
      console.log("Loses:" + losesCounter);
      resetGame();
    }
    update()
  }
  else {
    alert("Press any letter to start the game!");
  }
}

function update() {
  document.getElementById("lettersGuessed").textContent = "Guesses Left:" + numberGuesses;
  document.getElementById("numberGuesses").textContent = "Letters Used:" + lettersGuessed;
  document.getElementById("winCounter").textContent = "Win:" + winsCounter;
  document.getElementById("lossesCounter").textContent = "Losses:" + losesCounter;
}