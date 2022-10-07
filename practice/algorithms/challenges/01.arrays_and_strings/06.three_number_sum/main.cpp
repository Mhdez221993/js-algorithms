// O(n^2) time | O(n) space - where n is the length of the input array
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

vector<vector<int>> threeNumberSum(vector<int> array, int targetSum)
{
  sort(array.begin(), array.end());
  vector<vector<int>> threeNumSumResult;

  for (int i = 0; i < array.size(); i++)
  {
    int left = i + 1;
    int right = array.size() - 1;

    while (left < right)
    {
      int currSum = array[i] + array[left] + array[right];
      if (currSum == targetSum)
      {
        threeNumSumResult.push_back({array[i], array[left], array[right]});
        left++;
        right--;
      }
      else if (currSum > targetSum)
      {
        right--;
      }
      else if (currSum < targetSum)
      {
        left++;
      }
    }
  }

  sort(threeNumSumResult.begin(), threeNumSumResult.end());
  return threeNumSumResult;
}

int main()
{
  int targetSum = 0;
  vector<int> array = {12, 3, 1, 2, -6, 5, -8, 6};
  vector<vector<int>> finalArrayOfSum = threeNumberSum(array, targetSum);

  for (vector<int> array : finalArrayOfSum)
  {
    cout << array[0] << " " << array[1] << " " << array[2] << endl;
  }

  return 0;
}
