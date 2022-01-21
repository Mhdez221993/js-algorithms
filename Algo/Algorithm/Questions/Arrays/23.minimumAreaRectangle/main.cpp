
#include <vector>
#include <iostream>
#include <unordered_map>
#include <climits>
#include <algorithm>
// #include <string>
using namespace std;

// O(n^2) time | O(n) space - where n is the number of points.
unordered_map<string, vector<int>> mapPoinst(vector<vector<int>> points)
{
  unordered_map<string, vector<int>> pairPoints;
  for (int i = 0; i < points.size(); i++)
  {
    vector<int> p = points[i];
    string pointKey = to_string(p[0]) + ":" + to_string(p[1]);
    pairPoints[pointKey] = p;
  }
  return pairPoints;
}

int minimumAreaRectangle(vector<vector<int>> points)
{
  int minimumArea = INT_MAX;
  unordered_map<string, vector<int>> pairPoints = mapPoinst(points);
  sort(points.begin(), points.end());

  for (vector<int> point1 : points)
  {
    for (vector<int> point2 : points)
    {
      int x1 = point1[0], y1 = point1[1];
      int x2 = point2[0], y2 = point2[1];
      if ((x1 != x2) && (y1 != y2))
      {
        string p1 = to_string(x1) + ":" + to_string(y2);
        string p2 = to_string(x2) + ":" + to_string(y1);
        if (pairPoints.find(p1) != pairPoints.end() && pairPoints.find(p2) != pairPoints.end())
        {
          int currArea = ((max(x2, x1) - min(x1, x2)) * (max(y2, y1) - min(y1, y2)));
          minimumArea = min(currArea, minimumArea);
        }
      }
    }
  }

  return minimumArea == INT_MAX ? 0 : minimumArea;
}

int main()
{
  vector<vector<int>> points = {
      {-4, 4},
      {4, 4},
      {4, -2},
      {-4, -2},
      {0, -2},
      {4, 2},
      {0, 2},
      {0, 4},
      {2, 3},
      {0, 3},
      {2, 4}};
  cout << minimumAreaRectangle(points) << endl;
  return 0;
}
