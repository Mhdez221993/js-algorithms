// O(nlog(n)) time | O(n) space - where n is the length of the input array
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

bool overlapping(vector<int> prevInterval, vector<int> currInterval)
{
  if (currInterval[0] <= prevInterval[1])
    return true;
  return false;
}

vector<vector<int>> mergeOverlappingIntervals(vector<vector<int>> intervals)
{
  vector<vector<int>> result;
  sort(intervals.begin(), intervals.end());
  vector<int> prevInterval = intervals[0];

  for (int i = 1; i < intervals.size(); i++)
  {
    vector<int> currInterval = intervals[i];
    if (overlapping(prevInterval, currInterval))
    {
      prevInterval[0] = min(prevInterval[0], currInterval[0]);
      prevInterval[1] = max(prevInterval[1], currInterval[1]);
    }
    else
    {
      result.push_back(prevInterval);
      prevInterval = currInterval;
    }
  }

  result.push_back(prevInterval);
  return result;
}

int main()
{
  vector<vector<int>> array = {
      {1, 22},
      {-20, 30}};
  vector<vector<int>> result = mergeOverlappingIntervals(array);
  for (vector<int> arr : result)
    cout << arr[0] << " " << arr[1] << endl;

  return 0;
}
