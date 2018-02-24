/* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses
*/
var inquirer = require("inquirer");
//var prompt = require('prompt');
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
function selectWord() {
    var words = ["dum", "easy", "hara", "harr", "free"];//Bookkeeper
    var num = Math.floor(Math.random() * 5);
    var word = new Word(words[num]);
    //console.log("word is "+word)
      debugger;
    return word;
}
///////////////////////////////////////
// guessNow
///////////////////////////////////////
var guessNow = function() {
if (guessesLeft)
{
	console.log(" left "+guessesLeft)
  inquirer.prompt([
   {
      message: "Your letter?",
      type: "input",
      name: "uLetter"
   }]) 
  	.then(function(uInput) {
  	   //console.log(userInput.userInputLetter)
     var guess = uInput.uLetter;

     var letterFound = false;
     guessesLeft--;
     letterFound = hangmanWord.checkLetter(guess,letters);
    if (letterFound) {
  	//console.log("letterFound")
    solved = hangmanWord.checkIfSolved(letters)
    if (solved)
    {
  	 displayWord(letters);
  	 console.log("you win!")
  	 console.log("restart?")
  	 restartGame();
    }
    else
    {
     console.log("not solved "+solved)
  	 displayWord(letters);
  	 if(guessesLeft)
  	 {
  	   guessNow();
  	 }
  	 else
  	 	restartGame();
    }
  } // end letterFound
  else
  {
  	if (guessesLeft)
  	  guessNow();
    else
    {
      console.log("restart?")
      restartGame();
    }
  }
 }); // end inquirer.then
 } // end guessesLeft
 
} // end guessNow

var letsPlay = 1;
var guessesLeft = 0;
var hangmanWord = "temp";
var letters = [];
var maxGames = 5;
//while ( letsPlay--) 
startGame();
function restartGame() {
	letters=[];
	maxGames--;
	if (maxGames)
		startGame();
}
function startGame()
{
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
  var displayedWord = "";
  for (var i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
} // end displayWord

