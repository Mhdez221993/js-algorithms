#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

bool areValidDimesions(vector<int> o, vector<int> c)
{
  return o[0] < c[0] && o[1] < c[1] && o[2] < c[2];
}

vector<vector<int>> buidSwquence(vector<vector<int>> array, vector<int> sequences, int currIdx)
{
  vector<vector<int>> sequence;
  while (currIdx != INT_MIN)
  {
    sequence.insert(sequence.begin(), array[currIdx]);
    currIdx = sequences[currIdx];
  }

  return sequence;
}

vector<vector<int>> diskStacking(vector<vector<int>> disks)
{
  sort(disks.begin(), disks.end(), [](vector<int> &a, vector<int> &b)
       { return a[2] < b[2]; });

  vector<int> heights;
  for (int i = 0; i < disks.size(); i++)
  {
    heights.push_back(disks[i][2]);
  }

  vector<int> sequences;
  for (int i = 0; i < disks.size(); i++)
  {
    sequences.push_back(INT_MIN);
  }

  int maxHeightIdx = 0;

  for (int i = 1; i < disks.size(); i++)
  {
    vector<int> currDisk = disks[i];

    for (int j = 0; j < i; j++)
    {
      vector<int> otherDisk = disks[j];

      if (areValidDimesions(otherDisk, currDisk))
      {
        if (heights[i] <= currDisk[2] + heights[j])
        {
          heights[i] = currDisk[2] + heights[j];
          sequences[i] = j;
        }
      }
    }
    if (heights[i] > heights[maxHeightIdx])
    {
      maxHeightIdx = i;
    }
  }
  return buidSwquence(disks, sequences, maxHeightIdx);
}
