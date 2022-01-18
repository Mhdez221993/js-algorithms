#include <vector>
#include <climits>
#include <iostream>
#include <unordered_map>
#include <algorithm>
using namespace std;

int findAreaOfRectangle(vector<vector<int>> firstSecond, vector<int> third, vector<int> fourth)
{
  return 10;
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
        int currArea = findAreaOfRectangle(myHashPoints[key], points[i], points[right]);
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
      {0, 0},
      {4, 4},
      {8, 8},
      {0, 8}};
  cout << minimumAreaRectangle(points) << endl;
  return 0;
}
