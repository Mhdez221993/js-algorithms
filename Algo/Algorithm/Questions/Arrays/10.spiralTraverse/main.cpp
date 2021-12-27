// O(n) time | O(n) space - where n is the total number of elements in the array
#include <vector>
#include <iostream>

using namespace std;

vector<int> spiralTraverse(vector<vector<int>> array)
{
  vector<int> spiral = {};
  int startRow = 0;
  int endRow = array.size() - 1;
  int startCol = 0;
  int endCol = array[0].size() - 1;

  while (startRow <= endRow && startCol <= endCol)
  {
    for (int col = startCol; col <= endCol; col++)
    {
      spiral.push_back(array[startRow][col]);
    }

    for (int row = startRow + 1; row <= endRow; row++)
    {
      spiral.push_back(array[row][endCol]);
    }

    for (int col = endCol - 1; col >= startCol; col--)
    {
      if (startRow == endRow)
        break;
      spiral.push_back(array[endRow][col]);
    }

    for (int row = endRow - 1; row > startRow; row--)
    {
      if (startCol == endCol)
        break;
      spiral.push_back(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return spiral;
}

int main()
{

  vector<vector<int>> array = {
      {1, 2, 3},
      {12, 13, 4},
      {11, 14, 5},
      {10, 15, 6},
      {9, 8, 7}};
  vector<int> results = spiralTraverse(array);
  for (int x : results)
  {
    cout << x << " ";
  }
  cout << endl;
  return 0;
}