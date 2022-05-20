#include <vector>
using namespace std;

int numberOfWaysToMakeChange(int n, vector<int> denoms)
{
  vector<int> ways(n + 1, 0);
  ways[0] = 1;

  for (int denoms : denoms)
  {
    for (int amount = 1; amount < n + 1; amount++)
    {
      if (denoms <= amount)
        ways[amount] += ways[amount - denoms];
    }
  }

  return ways[n];
}
