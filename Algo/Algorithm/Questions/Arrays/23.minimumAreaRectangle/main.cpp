#include <vector>
#include <climits>
#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;
// string key = concat(to_string(min(currY, y)), to_string(max(currY, y)));

int findAreaOfRectangle(int len, int width1, int width2)
{
  int width = max(width1, width2);
  cout << (width * len) << endl;
  return len * width;
}

int minimumAreaRectangle(vector<vector<int>> points)
{
  int minimumArea = INT_MAX;
  unordered_map<int, vector<vector<int>>> myHashPoints;
  for (int i = 0; i < points.size(); i++)
  {
    int x = points[i][0];
    int y = points[i][1];
    for (int right = i + 1; right < points.size(); right++)
    {
      int currX = points[right][0];
      int currY = points[right][1];
      int key = max(currY, y) - min(currY, y);
      if (currX == x && myHashPoints[key].size() > 1)
      {
        int currArea = findAreaOfRectangle(key, currX, myHashPoints[key][0][0]);
        minimumArea = min(minimumArea, currArea);
      }
    }

    for (int left = i - 1; left >= 0; left--)
    {
      int currX = points[left][0];
      int currY = points[left][1];
      int key = max(currY, y) - min(currY, y);
      if (currX == x)
        myHashPoints[key] = {points[i], points[left]};
    }
  }

  if (minimumArea == INT_MAX)
    return 0;

  return minimumArea;
}

int main()
{
  vector<vector<int>> points = {
      {1, 5},
      {5, 1},
      {4, 2},
      {2, 4},
      {2, 2},
      {1, 2},
      {4, 5},
      {2, 5},
      {-1, -2}};
  cout << minimumAreaRectangle(points) << endl;
  return 0;
}
