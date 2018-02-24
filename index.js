/* **index.js**: The file containing the logic for the course of the game, 
    which depends on `Word.js` and
  * Randomly selects a word and uses the `Word` constructor to store it
  * Prompts the user for each guess and keeps track of the user's remaining guesses
  Author: Maryann Jordan
  improvements: add data verification
*/
var inquirer = require("inquirer");
var Letter = require("./letter.js")
var Word = require("./word.js")

///////////////////////////////////////
// start
// Create a "Prompt" 
///////////////////////////////////////
function start() {
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "confirm",
      message: "Are you ready to Play Hangman?",
      name: "readyToPlay",
      default: false
    }])
    .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, play
    console.log("readyplay "+inquirerResponse.readyToPlay)
    var Play = inquirerResponse.readyToPlay;
    if (Play) {
      console.log("\nWelcome to hangman fun!" );//+ inquirerResponse.readyToPlay);
      }
    else {
      console.log("\nThat's okay, come again when you are more sure.\n");
      return;
    }
  });
} //end start
//start(); //printing question twice...

///////////////////////////////////////
// guessNow
// selects a random word from the array of words 
// and returns it as a Word object
///////////////////////////////////////
function selectWord() 
{
    var words = ["pajama", "snooze", "dream", "siesta", "slumber", "catnap", 
    "doze", "sandman", "shuteye", "slippers"];
    var num = Math.floor(Math.random() * 10);
    var word = new Word(words[num]);
    return word;
}
///////////////////////////////////////
// guessNow
///////////////////////////////////////
var guessNow = function() {
 if (guessesLeft)
 {
  console.log("\n  "+guessesLeft+" guesses left ")
  inquirer.prompt([
   {
      message: "Your letter?",
      type: "input",
      name: "uLetter"
   }]) 
  	.then(function(uInput) {
     var guess = uInput.uLetter;
     var letterFound = false;
     guessesLeft--;
     letterFound = hangmanWord.checkLetter(guess,letters);
     if (letterFound) 
      {
       solved = hangmanWord.checkIfSolved(letters)
       if (solved)
       {
  	    displayWord(letters);
  	    console.log("\n  YOO HOO you win!\n")
  	    restartGame();
       }
       else
       {
  	     displayWord(letters);
  	     if(guessesLeft)
  	      guessNow();
  	     else
  	     {
  	 	  console.log("  Better Luck next time! Sorry you did not guess the word...\n")
  	 	  restartGame();
  	     }
        }
   } // end letterFound
  else
   {
  	if (guessesLeft)
  	{
  	  displayWord(letters);
  	  guessNow();
  	}
    else
    {
      console.log("  Sorry sleepyhead you did not guess the word...\n")
      restartGame();
    }
   }
  }); // end inquirer.then
 } // end guessesLeft
} // end guessNow
///////////////////////////////////////
// global variables
///////////////////////////////////////

var letsPlay = 1;
var guessesLeft = 0;
var hangmanWord = "temp";
var letters = [];
var maxGames = 5;
///////////////////////////////////////
// startGame
///////////////////////////////////////
startGame();
///////////////////////////////////////
// restartGame
///////////////////////////////////////
function restartGame() 
{
	letters=[];
	maxGames--;
	if (maxGames)
		startGame();
}
///////////////////////////////////////
// startGame
///////////////////////////////////////
function startGame()
{
  console.log("  HANGMAN FUN (bedtime)\n");
  guessesLeft = 10;
  hangmanWord = selectWord();
  var selectedWord = hangmanWord.word;
  
  for (var i=0; i<selectedWord.length; i++) {
    letters.push(new Letter(selectedWord.charAt(i)));
  }
  displayWord(letters);
  var solved = false;
  guessNow();	
} // end startGame

///////////////////////////////////////
// displayWord
// console display current word guesses
///////////////////////////////////////
function displayWord(letters) {
  var displayedWord = "  ";
  for (var i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
} // end displayWord

