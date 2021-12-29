// O(nlog(n)) time | O(n) space - where n is the length of the input array
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

vector<vector<int>> mergeOverlappingIntervals(vector<vector<int>> intervals)
{
  vector<vector<int> *> result;
  sort(intervals.begin(), intervals.end());
  vector<int> *currInterval = &intervals[0];
  result.push_back(currInterval);

  for (auto &nextInterval : intervals)
  {
    int currEnd = currInterval->at(1);
    int nextStart = nextInterval[0];
    int nextEnd = nextInterval[1];
    if (currEnd >= nextStart)
    {
      currInterval->at(1) = max(currEnd, nextEnd);
    }
    else
    {
      currInterval = &nextInterval;
      result.push_back(currInterval);
    }
  }

  vector<vector<int>> mergetIntervals;
  for (auto interval : result)
  {
    mergetIntervals.push_back(*interval);
  }

  return mergetIntervals;
}

int main()
{
  vector<vector<int>> array = {
      {1, 2},
      {3, 5},
      {4, 7},
      {6, 8},
      {9, 10}};
  vector<vector<int>> result = mergeOverlappingIntervals(array);
  for (vector<int> arr : result)
    cout << arr[0] << " " << arr[1] << endl;

  return 0;
}
