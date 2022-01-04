#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

vector<vector<int>> fourNumberSum(vector<int> array, int targetSum)
{
  vector<vector<int>> fourNumSum = {};
  sort(array.begin(), array.end());
  for (int i = 0; i < array.size(); i++)
  {
    for (int j = i + 1; j < array.size(); j++)
    {
      int left = j + 1;
      int right = array.size() - 1;
      while (left < right)
      {
        int currSum = array[i] + array[j] + array[left] + array[right];
        if (currSum == targetSum)
        {
          fourNumSum.push_back({array[i], array[j], array[left], array[right]});
          left++;
          right--;
        }
        else if (currSum < targetSum)
        {
          left++;
        }
        else if (currSum > targetSum)
        {
          right--;
        }
      }
    }
  }

  return fourNumSum;
}

int main()
{
  vector<int> array = {7, 6, 4, -1, 1, 2};
  int targetSum = 16;
  vector<vector<int>> result = fourNumberSum(array, targetSum);
  for (vector<int> array : result)
  {
    cout << array[0] << " " << array[1] << " " << array[2] << " " << array[3] << endl;
  }
  return 0;
}