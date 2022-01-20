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

  for (auto column : columns)
  {
    int x = column.first;
    vector<int> y = column.second;
    sort(y.begin(), y.end());
    columns[x] = y;
  }

  return columns;
}

vector<int> keysFromColums(unordered_map<int, vector<int>> columns)
{
  vector<int> sortKeys;
  for (auto column : columns)
  {
    int x = column.first;
    if (columns[x].size() > 1)
      sortKeys.push_back(x);
  }
  sort(sortKeys.begin(), sortKeys.end());

  return sortKeys;
}

string intToSting(int y1, int y2)
{
  string key = to_string(y1) + "," + to_string(y2);
  return key;
}

vector<int> stringToIng(string str)
{
  int index = str.find(",");
  int first = stoi(str.substr(0, index));
  int second = stoi(str.substr(index + 1, str.length()));
  return {first, second};
}

int getArea(int x1, int x2, int y1, int y2)
{
  int len = x2 - x1;
  int width = y2 - y1;
  return len * width;
}

int minimumAreaRectangle(vector<vector<int>> points)
{
  int minimumArea = INT_MAX;
  unordered_map<int, vector<int>> columns = mapPoinst(points);
  vector<int> sortedKeys = keysFromColums(columns);
  unordered_map<string, int> edges;

  for (int i = 0; i < sortedKeys.size(); i++)
  {
    int x = sortedKeys[i];
    vector<int> currentCol = columns[x];
    for (int j = 1; j < currentCol.size(); j++)
    {
      int left = 0;
      int currY = currentCol[j];
      while (left >= 0)
      {
        int prevY = currentCol[left];
        string key = intToSting(prevY, currY);
        if (edges.find(key) != edges.end())
        {
          int edgesKey = edges[key];
          vector<int> values = stringToIng(key);
          int currArea = getArea(edgesKey, x, values[0], values[1]);
          minimumArea = min(currArea, minimumArea);
        }
        edges[key] = x;
        left--;
      }
    }
  }

  if (minimumArea == INT_MAX)
    return 0;
  return minimumArea;
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
      {0, 2}};
  cout << minimumAreaRectangle(points) << endl;
  return 0;
}
