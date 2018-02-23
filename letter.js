/* **Letter.js**: 
**HINT:** Write `Letter.js` first and test it on its own
   before moving on, then do the same thing with `Word.js`

   `Letter.js` *should not* `require` any other files.
   Contains a constructor, Letter. This constructor should be 
   able to either display an underlying character or a blank placeholder 
   (such as an underscore), depending on whether or not the user has guessed 
   the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has 
    been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it 
    against the underlying character, updating the stored boolean value 
    to true if it was guessed correctly
*/
//constructor function for the Letter object
function Letter(letter) {
  this.letter = letter;
  this.shown = '_';
  //returns the character to be printed to the console
  this.printLetter = function() {
    return this.shown;
  }
  //changes the temporary character being shown to the actual letter
  this.changeShown = function() {
    this.shown = letter;
  }
  debugger;
  /*this.checkLetter = function(letter, word) {
    var letterFound = false;
    for (var i=0; i<this.word.length; i++) {
      if (this.word.charAt(i).toLowerCase() == letter.toLowerCase()) {
        letterFound = true;
        letters[i].changeShown();
      }
    }
    return letterFound;
  }*/
}

module.exports = Letter;