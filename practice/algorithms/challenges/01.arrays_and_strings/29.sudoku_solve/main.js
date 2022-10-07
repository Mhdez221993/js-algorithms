
function isTheCorrectNumber(num, row, col, board) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == num)
      return false;
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][col] == num)
      return false;
  }

  let subRow = Math.floor(row / 3) * 3;
  let subCol = Math.floor(col / 3) * 3;
  for (let i = subRow; i < (subRow + 3); i++) {
    for (let j = subCol; j < (subCol + 3); j++) {
      if (board[i][j] == num)
        return false;
    }
  }

  return true;
}

function solveParcialSudoku(row, col, board) {

  let currentRow = row;
  let currentCol = col;

  if (currentCol == board[row].length) {
    currentRow += 1;
    currentCol = 0;
    if (currentRow == board.length)
      return true;
  }

  if (board[currentRow][currentCol] == 0) {
    for (let num = 1; num <= 9; num++) {
      if (isTheCorrectNumber(num, row, col, board)) {
        board[row][col] = num;
        if (solveParcialSudoku(row, col + 1, board))
          return true;
      }
    }

    board[row][col] = 0;
    return false;
  }

  return solveParcialSudoku(currentRow, currentCol + 1, board);
}

function sudokuSolve(board) {
  let myBoard = board;
  return solveParcialSudoku(0, 0, myBoard);
}


let board = [
  [7, 8, 0, 4, 0, 0, 1, 2, 0],
  [6, 0, 0, 0, 7, 5, 0, 0, 9],
  [0, 0, 0, 6, 0, 1, 0, 7, 8],
  [0, 0, 7, 0, 4, 0, 2, 6, 0],
  [0, 0, 1, 0, 5, 0, 9, 3, 0],
  [9, 0, 4, 0, 6, 0, 0, 0, 5],
  [0, 7, 0, 3, 0, 0, 0, 1, 2],
  [1, 2, 0, 0, 0, 7, 4, 0, 0],
  [0, 4, 9, 2, 0, 6, 0, 0, 7]];

console.log(sudokuSolve(board));
