// You put a Knight and a King in the board.

// Complete the method that tell us which one can capture the other one.

// You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

// Return:

// "Knight" if the knight is putting the king in check,
// "King" if the king is attacking the knight
// "None" if none of the above occur
// Example:

// My Solution:
function knightVsKing(knightPosition, kingPosition) {
    var diffX = Math.abs(knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt());
    var diffY = Math.abs(knightPosition[0] - kingPosition[0]);
    
    if (diffX <= 1 && diffY <=1) {
      return 'King'
    } else if (diffX == 1 && diffY == 2 || diffX == 2 && diffY == 1) {
      return 'Knight'
    } 
    return 'None';
  }