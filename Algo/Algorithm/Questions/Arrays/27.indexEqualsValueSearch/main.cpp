#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int indexEqualsValueSearch(const vector<int> &arr)
{
  int start = 0;
  int end = arr.size() - 1;
  while (start <= end)
  {
    int middle = floor((start + end) / 2);
    if (arr[middle] - middle == 0)
      return arr[middle];
    else if (arr[middle] - middle < 0)
      start = middle + 1;
    else
      end = middle - 1;
  }

  return -1;
}

int main()
{
  vector<int> array = {-8, 0, 1, 3, 5};
  cout << indexEqualsValueSearch(array) << endl;
  return 0;
}
