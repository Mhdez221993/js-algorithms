// O(nlogn) time | O(1) space - where n is the number of coins
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

int nonConstructibleChange(vector<int> coins)
{
  sort(coins.begin(), coins.end());
  int minimumChangeICannotCreate = 1;
  for (int coin : coins)
  {
    if (coin > minimumChangeICannotCreate)
    {
      return minimumChangeICannotCreate;
    }
    minimumChangeICannotCreate += coin;
  }

  return minimumChangeICannotCreate;
}

int main()
{
  vector<int> coins = {5, 7, 1, 1, 2, 3, 22};
  cout << nonConstructibleChange(coins) << endl;
}
