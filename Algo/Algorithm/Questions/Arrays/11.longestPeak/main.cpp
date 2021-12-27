#include <iostream>
#include <vector>

using namespace std;

int longestPeak(vector<int> array)
{
  int peak = 0;
  int len = array.size() - 1;
  for (int i = 1; i < len; i++)
  {
    bool isPeak = (array[i] > array[i - 1]) && (array[i] > array[i + 1]);
    if (isPeak)
    {
      int left = i - 1;
      int currentPeak = 1;
      while (left >= 0 && array[left] < array[left + 1])
      {
        currentPeak++;
        left--;
      }
      int right = i + 1;
      while (right < array.size() && array[right] < array[right - 1])
      {
        currentPeak++;
        right++;
        i++;
      }

      if (currentPeak > peak)
        peak = currentPeak;
    }
  }

  return peak;
}

int main()
{

  vector<int> array = {5, 4, 3, 2, 1, 2, 10, 12};
  cout << longestPeak(array) << endl;
  return 0;
}