#include <vector>
using namespace std;

// O(n) time | O(1) space
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

// O(n) time | O(n) space
// int maxSubsetSumNoAdjacent(vector<int> array)
// {
//   if (!array.size())
//     return 0;

//   if (array.size() == 1)
//     return array[0];

//   vector<int> maxSums = array;
//   maxSums[1] = max(array[0], array[1]);

//   for (int i = 2; i < array.size(); i++)
//   {
//     maxSums[i] = max(maxSums[i - 1], (maxSums[i - 2] + array[i]));
//   }

//   return maxSums[maxSums.size() - 1];
// }
