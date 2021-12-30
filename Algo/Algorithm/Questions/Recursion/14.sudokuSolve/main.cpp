#include <iostream>
#include <vector>
using namespace std;

bool isTheCorrectNumber(int row, int col, int num, vector<vector<char>> &board)
{
  cout << endl;
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

  return true;
}

bool sudokuSolveII(vector<vector<char>> &board)
{
  for (int row = 0; row < board.size(); row++)
  {
    for (int col = 0; col < board[0].size(); col++)
    {
      if (board[row][col] == '.')
      {
        bool canFill = false;
        for (int num = 1; num <= board.size(); num++)
        {
          char numToChar = num + '0';
          if (isTheCorrectNumber(row, col, numToChar, board))
            board[row][col] = numToChar;
          for (vector<char> x : board)
          {
            cout << x[0] << " " << x[1] << " " << x[2] << endl;
          }
          // if (sudokuSolveII(board))
          //   canFill = true;
        }

        // if (canFill == false)
        // {
        //   board[row][col] = '.';
        //   return false;
        // }
      }
    }
  }

  return false;
}

bool sudokuSolve(const vector<vector<char>> &board)
{
  vector<vector<char>> myBoard = board;
  return sudokuSolveII(myBoard);
}

int main()
{
  vector<vector<char>> board = {
      {'3', '.', '.'},
      {'2', '3', '.'},
      {'.', '1', '2'}};
  cout << sudokuSolve(board) << endl;
}
