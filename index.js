/* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses
*/
var inquirer = require("inquirer");
//var prompt = require('prompt');
var Letter = require("./letter.js")
var Word = require("./word.js")
//prompt.start();
//var letsPlay = true;
//start();
// Create a "Prompt" with a series of questions.
function start() {
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "confirm",
      message: "Are you ready to Play Hangman?",
      name: "readyToPlay"//,
      //default: true
    }])
    .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, play
    debugger;
    letsPlay = inquirerResponse.readyToPlay;
    if (letsPlay) {

      console.log("\nWelcome to hangman fun!" );//+ inquirerResponse.readyToPlay);
      }
    else {

      console.log("\nThat's okay, come again when you are more sure.\n");
    }
  });
}

/*
var guessesLeft = 10;
var hangmanWord = selectWord();
var selectedWord = hangmanWord.word;
var letters = [];
for (var i=0; i<selectedWord.length; i++) {
  letters.push(new Letter(selectedWord.charAt(i)));
}
displayWord();
var solved = false;
*/
//selects a random word from the array of words and returns it as a Word object
function selectWord() {
    var words = ["dum", "easy", "hara", "harr", "free"];//Bookkeeper
    var num = Math.floor(Math.random() * 5);
    var word = new Word(words[num]);
    //console.log("word is "+word)
      debugger;
    return word;
}

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
//while ( letsPlay--) 
startGame();
function restartGame() {
	letters=[];
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

if (0)
{
var myguess = "adefghijklmnopqrstuvwxy"
for (var k=0; k<myguess.length;k++)
{
  var guess = myguess[k];
  var letterFound = false;
  letterFound = hangmanWord.checkLetter(guess,letters);
  displayWord();
  solved = hangmanWord.checkIfSolved(letters)
  if (solved)
  {
  	console.log("you win!")
  	break;
  }
}
}


function displayWord(letters) {
  var displayedWord = "";
  for (var i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
}

 //console.log("selected "+hangmanWord.word)
