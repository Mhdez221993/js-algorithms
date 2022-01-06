#include <vector>
#include <iostream>
#include <limits>
using namespace std;

vector<int> arrayToBeSorted(int left, int right, vector<int> array)
{
  int leftIdx = -1;
  int rightIndx = -1;
  for (int i = 0; i < array.size(); i++)
  {
    leftIdx = i;
    if (array[i] > left)
      break;
  }

  for (int i = (array.size() - 1); i >= 0; i--)
  {
    rightIndx = i;
    if (array[i] < right)
      break;
  }

  return {leftIdx, rightIndx};
}

vector<int> subarraySort(vector<int> array)
{
  int left = numeric_limits<int>::max();
  int right = numeric_limits<int>::min();
  for (int i = 1; i < array.size(); i++)
  {
    bool breaker = (array[i] < array[i - 1]);
    if (breaker)
    {
      if (array[i] < left)
        left = array[i];
      if (array[i - 1] > right)
        right = array[i - 1];
    }
  }

  if (left != numeric_limits<int>::max())
    return arrayToBeSorted(left, right, array);

  return {-1, -1};
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