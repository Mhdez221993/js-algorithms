#include <vector>
#include <iostream>
using namespace std;

// O(n) time | O(n) space - where n is the total number of elements in the two-dimensional array.

bool outOfBounds(int row, int col, int lenRow, int lenCol)
{
  return row < 0 || row > lenRow || col < 0 || col > lenCol;
}

vector<int> zigzagTraverse(vector<vector<int>> array)
{
  vector<int> zigzag = {};
  int row = 0;
  int col = 0;
  int lenRow = array.size() - 1;
  int lenCol = array[0].size() - 1;
  bool goinDown = true;

  while (!outOfBounds(row, col, lenRow, lenCol))
  {
    zigzag.push_back(array[row][col]);
    if (goinDown)
    {
      if (col == 0 || row == lenRow)
      {
        goinDown = false;
        if (row == lenRow)
          col++;
        else
          row++;
      }
      else
      {
        row++;
        col--;
      }
    }
    else
    {
      if (col == lenCol || row == 0)
      {
        goinDown = true;
        if (col == lenCol)
          row++;
        else
          col++;
      }
      else
      {
        row--;
        col++;
      }
    }
  }

  return zigzag;
}

int main()
{
  vector<vector<int>>
      array = {{1, 3, 4, 10},
               {2, 5, 9, 11},
               {6, 8, 12, 15},
               {7, 13, 14, 16}};

  for (int x : zigzagTraverse(array))
    cout << x << " ";
  cout << endl;
  return 0;
}
