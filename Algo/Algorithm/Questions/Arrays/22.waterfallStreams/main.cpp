#include <vector>
#include <iostream>

using namespace std;

vector<double> waterfallStreams(vector<vector<double>> array, int source)
{
  int len = array[0].size();
  vector<double> waterPersentage(len, 0);
  waterPersentage[source] = 100;

  for (int i = 0; i < array.size(); i++)
  {
    vector<double> currWaterPercentage(len, 0);
    for (int j = 0; j < len; j++)
    {
      if (waterPersentage[j] > 0)
      {
        if (array[i][j] == 0)
          currWaterPercentage[j] += waterPersentage[j];
        else
        {
          int rightIndx = j;
          while (rightIndx < len && array[i - 1][rightIndx] != 1)
          {
            if (array[i][rightIndx] == 0)
            {
              currWaterPercentage[rightIndx] += (waterPersentage[j] / 2);
              break;
            }
            rightIndx++;
          }

          int leftIndx = j;
          while (leftIndx >= 0 && array[i - 1][leftIndx] != 1)
          {
            if (array[i][leftIndx] == 0)
            {
              currWaterPercentage[leftIndx] += (waterPersentage[j] / 2);
              break;
            }
            leftIndx--;
          }
        }
      }
    }
    waterPersentage = currWaterPercentage;
  }
  // Write your code here.
  return waterPersentage;
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