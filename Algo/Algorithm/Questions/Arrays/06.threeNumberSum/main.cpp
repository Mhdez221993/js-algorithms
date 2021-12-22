#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

vector<vector<int>> threeNumberSum(vector<int> array, int targetSum)
{
  sort(array.begin(), array.end());
  vector<vector<int>> threeNumSumResult;

  for(int i = 1; i < array.size(); i++)
  {
    int curr = array[i];
    int leftIndx = 0;
    int rightIndx = array.size() -1;

    while(leftIndx < i && rightIndx > i)
    {
      int leftValue = array[leftIndx];
      int rightValue = array[rightIndx];
      int currSum = curr + leftValue + rightValue;

      if(currSum == targetSum)
      {
        threeNumSumResult.push_back({leftValue, curr, rightValue});
        leftIndx++;
        rightIndx--;
      }
      else if(currSum > targetSum)
      {
        rightIndx--;
      }
      else
      {
        leftIndx++;
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

  for(vector<int> array: finalArrayOfSum)
  {
    cout << array[0]<<" "<<array[1]<<" "<<array[2]<< endl;
  }

  return 0;
}
