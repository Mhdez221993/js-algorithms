#include <vector>
#include <iostream>
#include <climits>
#include <algorithm>
#include <unordered_map>
using namespace std;

int getCommonDivisor(int y, int x)
{
  int a = y;
  int b = x;
  while (true)
  {
    if (a == 0)
      return b;
    if (b == 0)
      return a;
    int temp = a;
    a = b;
    b = temp % b;
  }
}

vector<int> getSlope(vector<int> point1, vector<int> point2)
{
  int x1 = point1[0];
  int y1 = point1[1];
  int x2 = point2[0];
  int y2 = point2[1];
  vector<int> slope = {1, 0};
  if (x1 != x2)
  {
    int xDiff = (x2 - x1);
    int yDiff = (y2 - y1);
    int gcd = getCommonDivisor(abs(yDiff), abs(xDiff));
    xDiff /= gcd;
    yDiff /= gcd;
    if (xDiff < 0)
    {
      xDiff *= -1;
      yDiff *= -1;
    }
    slope = {yDiff, xDiff};
  }

  return slope;
}

string createSlopeKey(int numerator, int denominator)
{
  return to_string(numerator) + ":" + to_string(denominator);
}

int lineThroughPoints(vector<vector<int>> points)
{
  int maxPoint = 1;

  for (int i = 0; i < points.size(); i++)
  {
    auto p1 = points[i];
    unordered_map<string, int> slopes;
    for (int j = i + 1; j < points.size(); j++)
    {
      auto p2 = points[j];
      auto slope = getSlope(p1, p2);
      int rise = slope[0];
      int run = slope[1];
      string slopeKey = createSlopeKey(rise, run);
      if (slopes.find(slopeKey) == slopes.end())
        slopes[slopeKey] = 1;
      slopes[slopeKey]++;
    }

    for (auto x : slopes)
      maxPoint = max(maxPoint, slopes[x.first]);
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