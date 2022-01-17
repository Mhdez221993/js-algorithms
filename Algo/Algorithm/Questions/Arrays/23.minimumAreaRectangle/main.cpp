#include <vector>
#include <climits>
#include <iostream>
#include <unordered_map>
using namespace std;

unordered_map<int, vector<vector<int>>> getLineBetween2Poins(vector<vector<int>> &points)
{
  unordered_map<int, vector<vector<int>>> lines;
  for (vector<int> pairs : points)
  {
    int x = pairs[0];
    int y = pairs[1];
    if (lines.find(x) == lines.end())
      lines[x] = {};
    lines[x].push_back(pairs);
  }

  return lines;
}

int minimumAreaRectangle(vector<vector<int>> points)
{
  int minimumArea = 0;
  unordered_map<int, vector<vector<int>>> linesBetweenPoints = getLineBetween2Poins(points);
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
