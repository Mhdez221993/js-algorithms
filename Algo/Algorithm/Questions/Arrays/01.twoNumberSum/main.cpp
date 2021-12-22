// O(nLog(n)) time | O(1) space - where n is the length of the input array
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum)
{
  sort(array.begin(), array.end());
  int leftIdx = 0;
  int rightIndx = array.size() - 1;

  for (; leftIdx < rightIndx;)
  {
    int first = array[leftIdx];
    int second = array[rightIndx];

    if (first + second == targetSum)
    {
      return {first, second};
    }
    else if (first + second < targetSum)
    {
      leftIdx += 1;
    }
    else
    {
      rightIndx -= 1;
    }
  }

  return {};
}

int main()
{
  vector<int> array = {3, 5, -4, 8, 11, 1, -1, 6};
  int targetSum = 10;

  vector<int> sumOfTwo = twoNumberSum(array, targetSum);
  for (int x : sumOfTwo)
  {
    cout << x << endl;
  }

  return 0;
}
