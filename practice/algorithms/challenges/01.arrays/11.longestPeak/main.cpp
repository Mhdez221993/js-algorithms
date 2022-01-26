// O(n) time | O(1) space - where n is the length of the input array
#include <iostream>
#include <vector>

using namespace std;

int longestPeak(vector<int> array)
{
  int peak = 0;
  int i = 1;
  while (i < int(array.size() - 1))
  {
    bool isPeak = (array[i] > array[i - 1]) && (array[i] > array[i + 1]);
    if (!isPeak)
    {
      i++;
      continue;
    }

    int left = i - 2;
    while (left >= 0 && array[left] < array[left + 1])
    {
      left--;
    }
    int right = i + 2;
    while (right < array.size() && array[right] < array[right - 1])
    {
      right++;
    }

    int currentPeak = right - left - 1;
    peak = max(peak, currentPeak);
    i = right;
  }

  return peak;
}

int main()
{

  vector<int> array = {1, 2, 3, 3, 4, 0, 10, 6};
  cout << longestPeak(array) << endl;
  return 0;
}