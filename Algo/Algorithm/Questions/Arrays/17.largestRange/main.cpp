#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
using namespace std;

// O(nLogn) time | O(1) space - where n is the length of the input array.
vector<int> largestRange(vector<int> array)
{
  sort(array.begin(), array.end());
  vector<int> range;
  int len = INT_MIN;
  int firstIndx;
  int lastIndx;
  bool foundingRange = false;
  for (int i = 0; i < array.size(); i++)
  {
    int curr = array[i];
    int prev = array[i - 1];
    if (i == 0)
    {
      range = {curr, curr};
      continue;
    }
    if (curr - 1 == prev || curr == prev)
    {
      if (!foundingRange)
      {
        firstIndx = prev;
        foundingRange = true;
      }
      lastIndx = curr;
      if (lastIndx - firstIndx > len)
        range = {firstIndx, lastIndx};
    }
    else if (foundingRange)
    {
      if (lastIndx - firstIndx > len)
      {
        len = lastIndx - firstIndx;
        range = {firstIndx, lastIndx};
      }
      foundingRange = false;
    }
  }

  return range;
}

int main()
{
  vector<int> array = {1};
  for (int x : largestRange(array))
  {
    cout << x << " ";
  }
  cout << endl;

  return 0;
}
