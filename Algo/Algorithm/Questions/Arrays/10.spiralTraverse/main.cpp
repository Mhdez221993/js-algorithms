#include <vector>
#include <iostream>

using namespace std;

vector<int> spiralTraverse(vector<vector<int>> array)
{
  vector<int> spiral = {};
  int rowStart = 0;
  int rowEnd = array.size() - 1;
  int colStart = 0;
  int colEnd = array[0].size() - 1;

  while (rowStart <= rowEnd && colStart <= colEnd)
  {
    int target = colStart;
    while (target <= colEnd)
    {
      spiral.push_back(array[rowStart][target]);
      target++;
    }

    if (rowStart == rowEnd)
    {
      return spiral;
    }
    target = rowStart + 1;
    while (target <= rowEnd)
    {
      spiral.push_back(array[target][colEnd]);
      target++;
    }

    if (colStart == colEnd)
    {
      return spiral;
    }
    target = colEnd - 1;
    while (target >= colStart)
    {
      spiral.push_back(array[rowEnd][target]);
      target--;
    }

    target = rowEnd - 1;
    while (target > rowStart)
    {
      spiral.push_back(array[target][colStart]);
      target--;
    }

    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
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