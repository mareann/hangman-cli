/* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses
*/
var inquirer = require("inquirer");
var Letter = require("./letter.js")
var Word = require("./word.js")

//var word = game.selectWord();
var hangmanWord = selectWord();
var selectedWord = hangmanWord.word;
var letters = [];
for (var i=0; i<selectedWord.length; i++) {
  letters.push(new Letter(selectedWord.charAt(i)));
}
displayWord()
var solved = false;
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
var guessesLeft = 5;
//makeGuess();
//module.exports = {
  //selects a random word from the array of words and returns it as a Word object
   function selectWord() {
    var words = ["dummy", "easy", "hard", "harder", "free"];//Bookkeeper
    var num = Math.floor(Math.random() * 5);
    var word = new Word(words[num]);
    //console.log("word is "+word)
      debugger;
    return word;
  }
//};

function displayWord() {
  var displayedWord = "";
  for (var i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
}

 console.log("selected "+hangmanWord.word)

// console.log("check "+hangmanWord.checkLetter('d',letters))