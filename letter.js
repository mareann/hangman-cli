/* **Letter.js**:
  Author: Maryann Jordan
*/
///////////////////////////////////////
//constructor function for the Letter object
///////////////////////////////////////
function Letter(letter) {
  this.letter = letter;
  this.shown = '_';
  //returns the character to be printed to the console
  this.printLetter = function() {
    return this.shown;
  }
  //changes the shown character
  this.changeShown = function() {
    this.shown = letter;
  }
}

module.exports = Letter;