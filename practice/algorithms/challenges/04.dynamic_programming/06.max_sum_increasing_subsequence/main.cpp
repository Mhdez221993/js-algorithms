#include <vector>
#include <climits>
using namespace std;

vector<int> buildSequence(vector<int> array, vector<int> sequences, int currIndx)
{
  vector<int> sequence = {};
  while (currIndx != INT_MIN)
  {
    sequence.insert(sequence.begin(), array[currIndx]);
    currIndx = sequences[currIndx];
  }

  return sequence;
}

vector<vector<int>> maxSumIncreasingSubsequence(vector<int> array)
{
  vector<int> sequences(array.size(), INT_MIN);
  vector<int> sums = array;
  int maxSumIdx = 0;

  for (int i = 0; i < array.size(); i++)
  {
    int currNum = array[i];
    for (int j = 0; j < i; j++)
    {
      int otherNum = array[j];

      if (otherNum < currNum && sums[j] + currNum >= sums[i])
      {
        sums[i] = sums[j] + currNum;
        sequences[i] = j;
      }
    }

    if (sums[i] >= sums[maxSumIdx])
      maxSumIdx = i;
  }

  return {
      {sums[maxSumIdx]},                          // Sum of sequence.
      buildSequence(array, sequences, maxSumIdx), // Elements of the sequence.
  };
}
