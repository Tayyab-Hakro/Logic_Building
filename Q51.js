/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    // Initialize  no of ships to 0
    let ships = 0;
  
    // Loop through each position(cell) on the board
    for (i = 0; i < board.length; i++) {
      for (j = 0; j < board[0].length; j++) {
        // If the board does not have `X` means there is no part of ship present
        // So we continue
        if (board[i][j] == ".") {
          continue;
        }
  
        // Now at this point the position(cell) is `X`
        // We check if it is a part of a ship or not
        // It can either be a part of a ship parked verticaly in which case board[i - 1][j] should be `X`
        // Or it can be a part of a ship parked horizontally in which case board[i][j - 1] should be `X`
        // In both of the above cases, we already have found a ship before when we encounter it's first cell
        // So we dont increment the result
        let previousLeft = board[i]?.[j - 1] || ".";
        let previousUp = board[i - 1]?.[j] || ".";
  
        if (previousLeft == "X" || previousUp == "X") {
          continue;
        }
  
        // If it's not any of the above case, then it's either a ship of one cell or a part of a new ship which
        // we have found for the first time
        // So increament the result
        ships++;
      }
    }
  
    return ships;
  };