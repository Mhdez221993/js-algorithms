#include <vector>
#include <iostream>
#include <algorithm>
#include <unordered_map>
using namespace std;
void addFourtNumbers(vector<vector<int>> array, int num1, int num2, vector<vector<int>> &fourNumSum)
{
  for (vector<int> arr : array)
  {
    arr.push_back(num1);
    arr.push_back(num2);
    fourNumSum.push_back(arr);
  }
}

vector<vector<int>> fourNumberSum(vector<int> array, int targetSum)
{
  vector<vector<int>> fourNumSum = {};
  unordered_map<int, vector<vector<int>>> myHash = {};
  for (int i = 1; i < array.size(); i++)
  {
    for (int right = i + 1; right < array.size(); right++)
    {
      int difference = targetSum - (array[i] + array[right]);
      if (myHash[difference].size() > 0)
      {
        addFourtNumbers(myHash[difference], array[i], array[right], fourNumSum);
      }
    }

    for (int left = i - 1; left >= 0; left--)
    {
      int curr = array[i] + array[left];
      vector<int> currPair = {array[i], array[left]};
      if (myHash[curr].size() < 1)
        myHash[curr] = {};
      myHash[curr].push_back(currPair);
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