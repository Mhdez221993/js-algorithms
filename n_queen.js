function solve_n_queen(board, col) {
  if (col >= board.length) return true;

  for (let i = 0; i < arr.length; i++) {
    // n
    if (isSafe(board, i, col)) {
      // n
      board[i][col] = 1;

      if (solve_n_queen(board, col + 1)) return true;

      board[i][col] = 0;
    }
  }

  return false;
}

// Big O(n^2)

function isSafe(board, row, col) {
  let n = board.length;

  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === 1) return false;
  }

  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === 1) return false;
  }

  for (let i = row, j = col; i < n && j < n; i++, j++) {
    if (board[i][j] === 1) return false;
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) return false;
  }

  return true;
}

const arr = [
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
];

console.log(solve_n_queen(arr, 0));
