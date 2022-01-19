#include <vector>
#include <climits>
#include <iostream>
#include <string.h>
#include <unordered_map>
#include <algorithm>
using namespace std;

unordered_map<int, vector<int>> sortColumns(vector<vector<int>> points)
{
  unordered_map<int, vector<int>> columns;
  for (int i = 0; i < points.size(); i++)
  {
    int x = points[i][0];
    int y = points[i][1];
    if (columns.find(x) == columns.end())
      columns[x] = {};
    columns[x].push_back(y);
  }

  return columns;
}

vector<int> sortKeys(unordered_map<int, vector<int>> points)
{
  vector<int> sortKeys;
  for (auto x : points)
  {
    int key = x.first;
    if (points[key].size() > 1)
      sortKeys.push_back(key);
  }

  sort(sortKeys.begin(), sortKeys.end());
  return sortKeys;
}

int minimumAreaRectangle(vector<vector<int>> points)
{

  unordered_map<int, vector<int>> sortedColumns = sortColumns(points);
  vector<int> sortedKeys = sortKeys(sortedColumns);
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
