#include <vector>
#include <iostream>
#include <climits>
using namespace std;

vector<int> getIndxOfSubArrayToBeSorted(int left, int right, vector<int> array)
{
  int leftIdx = 0;
  while (left >= array[leftIdx])
    leftIdx++;

  int rightIndx = array.size() - 1;
  while (right <= array[rightIndx])
    rightIndx--;

  return {leftIdx, rightIndx};
}

// O(n) time | O(1) space - where n is the length of the input array
vector<int> subarraySort(vector<int> array)
{
  int left = INT_MAX;
  int right = INT_MIN;
  for (int i = 1; i < array.size(); i++)
  {
    bool breaker = (array[i] < array[i - 1]);
    if (breaker)
    {
      left = min(array[i], left);
      right = max(array[i - 1], right);
    }
  }

  if (left == INT_MAX)
    return {-1, -1};

  return getIndxOfSubArrayToBeSorted(left, right, array);
}

int main()
{
  vector<int> array = {1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19};
  for (int i : subarraySort(array))
  {
    cout << i << " ";
  }
  cout << endl;
  return 0;
}
