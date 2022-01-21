#include <vector>
#include <iostream>
#include <unordered_map>
#include <climits>
#include <algorithm>
// #include <string>
using namespace std;

unordered_map<int, vector<int>> mapPoinst(vector<vector<int>> points)
{
  unordered_map<int, vector<int>> columns;
  for (vector<int> point : points)
  {
    int x = point[0];
    int y = point[1];
    if (columns.find(x) == columns.end())
      columns[x] = {};
    columns[x].push_back(y);
  }

  return columns;
}

int minimumAreaRectangle(vector<vector<int>> points)
{
  int minimumArea = INT_MAX;
  unordered_map<int, vector<int>> columns = mapPoinst(points);
  vector<int> sortedKeys;
  unordered_map<string, int> edges;

  for (auto x : columns)
    sortedKeys.push_back(x.first);
  sort(sortedKeys.begin(), sortedKeys.end());

  for (int i = 0; i < sortedKeys.size(); i++)
  {
    int x2 = sortedKeys[i];
    vector<int> currentCol = columns[x2];
    sort(currentCol.begin(), currentCol.end());
    for (int currIndx = 0; currIndx < currentCol.size(); currIndx++)
    {
      int y2 = currentCol[currIndx];
      for (int prevIndex = 0; prevIndex < currIndx; prevIndex++)
      {
        int y1 = currentCol[prevIndex];
        string pointKey = to_string(y1) + ":" + to_string(y2);
        if (edges.find(pointKey) != edges.end())
        {
          int x1 = edges[pointKey];
          int currArea = ((x2 - x1) * (y2 - y1));
          minimumArea = min(currArea, minimumArea);
        }
        edges[pointKey] = x2;
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
