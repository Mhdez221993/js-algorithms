#include <vector>
#include <iostream>
using namespace std;

vector<int> zigzagTraverse(vector<vector<int>> array)
{
  vector<int> zigzag = {};
  int row = 0;
  int col = 0;
  int lenRow = array.size() - 1;
  int lenCol = array[0].size() - 1;
  zigzag.push_back(array[row][col]);
  while (row <= lenRow && col <= lenCol)
  {
    if (row < lenRow)
      row++;
    else
      col++;

    while (row >= 0 && col <= lenCol)
    {
      zigzag.push_back(array[row][col]);
      if (row == 0 || col == lenCol)
        break;
      row--;
      col++;
    }

    if (col < lenCol)
      col++;
    else
      row++;

    while (row <= lenRow && col >= 0)
    {
      zigzag.push_back(array[row][col]);
      if (col == 0 || row == lenRow)
        break;
      row++;
      col--;
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
