#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

bool isTheCorrectNumber(int num, int row, int col, vector<vector<int>> &board)
{
  for (int i = 0; i < board.size(); i++)
  {
    if (board[row][i] == num)
      return false;
  }

  for (int i = 0; i < board.size(); i++)
  {
    if (board[i][col] == num)
      return false;
  }

  int subRow = floor(row / 3) * 3;
  int subCol = floor(col / 3) * 3;
  for (int i = subRow; i < (subRow + 3); i++)
  {
    for (int j = subCol; j < (subCol + 3); j++)
    {
      if (board[i][j] == num)
        return false;
    }
  }

  return true;
}

bool solveParcialSudoku(int row, int col, vector<vector<int>> &board)
{
  for (vector<int> x : board)
  {
    cout << x[0] << " " << x[1] << " " << x[2] << " " << x[3] << " " << x[4] << " " << x[5] << " " << x[6] << " " << x[7] << " " << x[8] << endl;
  }
  cout << endl;
  int currentRow = row;
  int currentCol = col;

  if (currentCol == board[row].size())
  {
    currentRow += 1;
    currentCol = 0;
    if (currentRow == board.size())
      return true;
  }

  if (board[currentRow][currentCol] == 0)
  {
    for (int num = 1; num <= 9; num++)
    {
      if (isTheCorrectNumber(num, row, col, board))
      {
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

bool sudokuSolve(const vector<vector<int>> &board)
{
  vector<vector<int>> myBoard = board;
  return solveParcialSudoku(0, 0, myBoard);
}

int main()
{
  vector<vector<int>> board = {
      {7, 8, 0, 4, 0, 0, 1, 2, 0},
      {6, 0, 0, 0, 7, 5, 0, 0, 9},
      {0, 0, 0, 6, 0, 1, 0, 7, 8},
      {0, 0, 7, 0, 4, 0, 2, 6, 0},
      {0, 0, 1, 0, 5, 0, 9, 3, 0},
      {9, 0, 4, 0, 6, 0, 0, 0, 5},
      {0, 7, 0, 3, 0, 0, 0, 1, 2},
      {1, 2, 0, 0, 0, 7, 4, 0, 0},
      {0, 4, 9, 2, 0, 6, 0, 0, 7}};
  cout << sudokuSolve(board) << endl;
}
