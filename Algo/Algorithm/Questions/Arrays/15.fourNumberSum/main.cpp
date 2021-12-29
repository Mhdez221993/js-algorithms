#include <vector>
using namespace std;

vector<vector<int>> fourNumberSum(vector<int> array, int targetSum)
{
  vector<int> fourNumSum = {};
  for (int i = 0; i < array.size(); i++)
  {
    for (int j = i + 1; j < array.size(); j++)
    {
      int left = j + 1;
      int right = array.size() - 1;
      while (left < right)
      {
        int currSum = array[i] + array[j] + array[left] + array[right];
        if (currSum < targetSum)
        {
          left++;
        }
        else if (currSum > targetSum)
        {
          right--;
        }
        else
        {
          return {array[i], array[j], array[left], array[right]};
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
  vector<int> result = fourNumberSum(array, targetSum);
  return 0;
}