/* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses
*/
var inquirer = require("inquirer");
var prompt = require('prompt');
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
//guessNow();
var guessesLeft = 5;
var hangmanWord = selectWord();
var selectedWord = hangmanWord.word;
var letters = [];
for (var i=0; i<selectedWord.length; i++) {
  letters.push(new Letter(selectedWord.charAt(i)));
}
displayWord();
var solved = false;

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
  	 displayWord();
  	 console.log("you win!")
  	//break;
    }
    else
    {
  	 displayWord();
  	 guessNow();
    }
  }
 });
}
}
guessNow();

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
  debugger;
  /*
  for (var j=0;j<letters.length;j++)
  {
    console.log("letters is "+letters[j].letter)
    //console.log(letters[j].shown)
  }
  for (var k=0;k<letters.length;k++)
  {
    //console.log("letters is "+letters[j].letter)
    console.log(letters[k].shown)
  }*/

//makeGuess();


function displayWord() {
  var displayedWord = "";
  for (var i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
}

 //console.log("selected "+hangmanWord.word)
//}
// console.log("check "+hangmanWord.checkLetter('d',letters))