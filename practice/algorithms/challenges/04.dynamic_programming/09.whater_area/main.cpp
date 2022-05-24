#include <vector>
using namespace std;

// O(n) time | O(n) space
int waterArea(vector<int> heights)
{
  vector<int> maxes(heights.size(), 0);
  int lefMaxPillar = 0;

  for (int i = 0; i < heights.size(); i++)
  {
    int currentHeight = heights[i];
    maxes[i] = lefMaxPillar;
    lefMaxPillar = max(lefMaxPillar, currentHeight);
  }

  int rightMaxPillar = 0;
  for (int i = heights.size() - 1; i >= 0; i--)
  {
    int currentHeight = heights[i];
    int minHeight = min(rightMaxPillar, maxes[i]);

    if (currentHeight < minHeight)
      maxes[i] = minHeight - currentHeight;
    else
      maxes[i] = 0;

    rightMaxPillar = max(rightMaxPillar, currentHeight);
  }

  int total = 0;
  for (int i = 0; i < heights.size(); i++)
    total += maxes[i];

  return total;
}
