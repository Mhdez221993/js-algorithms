#include <vector>
#include <iostream>
#include <climits>
#include <algorithm>
#include <unordered_map>
using namespace std;

int lineThroughPoints(vector<vector<int>> points)
{
  int maxPoint = INT_MIN;
  unordered_map<int, int> lineThrough;
  sort(points.begin(), points.end());

  for (int i = 0; i < points.size(); i++)
  {
    for (int j = i + 1; j < points.size(); j++)
    {
      int x1 = points[i][0];
      int y1 = points[i][1];
      int x2 = points[j][0];
      int y2 = points[j][1];
      if (x2 != x1)
      {
        int m = (y2 - y1) / (x2 - x1);
        int x = x2;
        int b = y1;
        int y = (m * x) + b;
        if (lineThrough.find(y) == lineThrough.end())
          lineThrough[y] = 0;
        lineThrough[y] += 1;
        maxPoint = max(maxPoint, lineThrough[y]);
      }
    }
  }
  return maxPoint;
}

int main()
{
  vector<vector<int>> points = {
      {1, 1},
      {2, 2},
      {3, 3},
      {0, 4},
      {-2, 6},
      {4, 0},
      {2, 1}};
  cout << lineThroughPoints(points) << endl;
  return 0;
}