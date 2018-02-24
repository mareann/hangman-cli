/* **Word.js**: 
 `Word.js` *should only* require `Letter.js`
 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string
  (check out this example: https://jsbin.com/facawetume/edit?js,console)
  Contains a constructor, Word that depends on the Letter 
  constructor. This is used to create an object representing the current word 
  the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the 
    underlying word

  * A function that returns a string representing the word. This should 
    call the function on each letter object (the first function defined in 
    `Letter.js`) that displays the character or an underscore and 
    concatenate those together.

  * A function that takes a character as an argument and calls the guess 
    function on each letter object (the second function defined in `Letter.js`)
*/
var Letter = require("./letter.js")
//constructor function for the Word object
function Word(word) {
  this.word = word;
  console.log("passed to Word "+this.word)
  //checks to see if the letter guessed is in the word, and calls the method to change the shown character if it is
  this.checkLetter = function(letter, letters) {
    var letterFound = false;
    //console.log(letter+" word "+this.word.length)
    for (var i=0; i<this.word.length; i++) {
      if (this.word.charAt(i).toLowerCase() == letter.toLowerCase()) {
        letterFound = true;
        letters[i].changeShown();
      }
    }
    return letterFound;
  }
  //checks to see if the word has been solved by checking to see if 
  //all the shown characters are letters
  this.checkIfSolved = function(letters) {
    var solved = true;
    //console.log("solved "+this.word.length)
    for (var i=0; i<this.word.length; i++) {
      if (letters[i].shown == '_') {
        solved = false;
      }
    }
    return solved;
  }
}

 module.exports = Word;