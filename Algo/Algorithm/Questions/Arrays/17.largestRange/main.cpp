#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
#include <unordered_map>

using namespace std;

// O(nLogn) time | O(1) space - where n is the length of the input array.
vector<int> largestRange(vector<int> array)
{
  unordered_map<int, bool> nums = {};
  vector<int> result;

  int longestLeng = 0;
  for (int num : array)
    nums[num] = true;

  for (int num : array)
  {
    if (!nums[num])
      continue;

    int leftNum = num - 1;
    int rightNum = num + 1;
    int currLen = 1;

    while (nums[leftNum])
    {
      nums[leftNum] = false;
      leftNum -= 1;
      currLen += 1;
    }

    while (nums[rightNum])
    {
      nums[rightNum] = false;
      rightNum += 1;
      currLen += 1;
    }

    if (currLen > longestLeng)
    {
      longestLeng = currLen;
      result = {leftNum + 1, rightNum - 1};
    }
  }

  return result;
}

int main()
{
  vector<int> array = {0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2};
  for (int x : largestRange(array))
  {
    cout << x << " ";
  }
  cout << endl;

  return 0;
}
