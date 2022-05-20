#include <vector>
using namespace std;

int maxSubsetSumNoAdjacent(vector<int> array)
{
  if (!array.size())
    return 0;

  if (array.size() == 1)
    return array[0];

  int prevSum = array[0];
  int maxSum = max(array[0], array[1]);

  for (int i = 2; i < array.size(); i++)
  {
    int curr = array[i];
    int currMaxSum = max(maxSum, (prevSum + curr));
    prevSum = maxSum;
    maxSum = currMaxSum;
  }

  return maxSum;
}
