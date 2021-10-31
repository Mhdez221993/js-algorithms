#include <bits/stdc++.h>
#include <vector>
using namespace std;

vector<int> twoNumberSum(vector<int> array, int targetSum)
{
  sort(array.begin(), array.end());
  int left = 0;
  int right = array.size() - 1;
  for (; left < right;)
  {
    int first = array[left];
    int second = array[right];
    if (first + second == targetSum)
    {
      return vector<int>{first, second};
    }
    else if (first + second > targetSum)
    {
      right--;
    }
    else
    {
      left++;
    }
  }

  return {};
}

int main()
{
  vector<int> array = {3, 5, -4, 8, 11, 1, -1, 6};
  int target = 10;

  twoNumberSum(array, target);
}
