/* **Word.js**: 
 `Word.js` *should only* require `Letter.js`
  Author: Maryann Jordan
*/
var Letter = require("./letter.js")

///////////////////////////////////////
//constructor function for the Word object
///////////////////////////////////////
function Word(word) {
  this.word = word;
  //console.log("passed to Word "+this.word)
  //checks to see if the letter guessed is in the word, and calls the method to change the shown character if it is
  this.checkLetter = function(letter, letters) {
    var letterFound = false;
    for (var i=0; i<this.word.length; i++) {
      if (this.word.charAt(i).toLowerCase() == letter.toLowerCase()) {
        letterFound = true;
        letters[i].changeShown();
      }
    }
    return letterFound;
  }
  //checks to see if the word has been solved
  this.checkIfSolved = function(letters) {
    var solved = true;
    for (var i=0; i<this.word.length; i++) {
      if (letters[i].shown == '_') {
        solved = false;
      }
    }
    return solved;
  }
}

 module.exports = Word;