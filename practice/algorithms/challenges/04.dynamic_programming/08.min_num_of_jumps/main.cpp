#include <vector>
#include <climits>
using namespace std;

// space O(n^2) time | O(n) space
int minNumberOfJumps(vector<int> array)
{
  vector<int> jumps(array.size(), INT_MAX);
  jumps[0] = 0;

  for (int i = 1; i < array.size(); i++)
  {
    for (int j = 0; j < i; j++)
    {
      if (array[j] >= i - j)
        jumps[i] = min(jumps[j] + 1, jumps[i]);
    }
  }

  return jumps[jumps.size() - 1];
}
