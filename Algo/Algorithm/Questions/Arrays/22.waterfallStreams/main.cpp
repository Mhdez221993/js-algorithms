#include <vector>
#include <iostream>

using namespace std;

vector<double> waterfallStreams(vector<vector<double>> array, int source)
{
  int len = array[0].size();
  vector<double> rowAbove(len);
  rowAbove[source] = 100;

  for (int row = 0; row < array.size(); row++)
  {
    vector<double> currRow(len);
    for (int col = 0; col < len; col++)
    {
      double hasWatherAbove = rowAbove[col];
      bool noBlocker = array[row][col] == 0;
      if (hasWatherAbove)
      {
        if (noBlocker)
          currRow[col] += rowAbove[col];
        else
        {
          int rightIndx = col;
          while (rightIndx < len && array[row - 1][rightIndx] != 1)
          {
            if (array[row][rightIndx] == 0)
            {
              currRow[rightIndx] += (rowAbove[col] / 2);
              break;
            }
            rightIndx++;
          }

          int leftIndx = col;
          while (leftIndx >= 0 && array[row - 1][leftIndx] != 1)
          {
            if (array[row][leftIndx] == 0)
            {
              currRow[leftIndx] += (rowAbove[col] / 2);
              break;
            }
            leftIndx--;
          }
        }
      }
    }
    rowAbove = currRow;
  }
  // Write your code here.
  return rowAbove;
}

int main()
{
  vector<vector<double>> array = {
      {0, 0, 0, 0, 0, 0, 0},
      {1, 0, 0, 0, 0, 0, 0},
      {0, 0, 1, 1, 1, 0, 0},
      {0, 0, 0, 0, 0, 0, 0},
      {1, 1, 1, 0, 0, 1, 0},
      {0, 0, 0, 0, 0, 0, 1},
      {0, 0, 0, 0, 0, 0, 0}};
  int source = 3;
  for (double x : waterfallStreams(array, source))
    cout << x << " ";
  cout << endl;
  return 0;
}