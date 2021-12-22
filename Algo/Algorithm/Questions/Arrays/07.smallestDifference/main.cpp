// O(nlog(n) + mlog(m)) time | O(1) space - where n is the length of the first input array and m is the length of the second input array
#include <vector>
#include <iostream>
#include <climits>
#include <algorithm>
using namespace std;

vector<int> smallestDifference(vector<int> arrayOne, vector<int> arrayTwo)
{
  sort(arrayOne.begin(), arrayOne.end());
  sort(arrayTwo.begin(), arrayTwo.end());
  int first = 0;
  int second = 0;
  int currDifference = INT_MAX;
  int bestDiffence = INT_MAX;
  vector<int> bestPair;

  while (first < arrayOne.size() && second < arrayTwo.size())
  {
    int firstValue = arrayOne[first];
    int secondValue = arrayTwo[second];

    if (firstValue < secondValue)
    {
      currDifference = secondValue - firstValue;
      first++;
    }
    else if (secondValue < firstValue)
    {
      currDifference = firstValue - secondValue;
      second++;
    }
    else
    {
      return vector<int>{firstValue, secondValue};
    }

    if (bestDiffence > currDifference)
    {
      bestDiffence = currDifference;
      bestPair = {firstValue, secondValue};
    }
  }

  return bestPair;
}

int main()
{
  vector<int> arrayOne = {10, 1000};
  vector<int> arrayTwo = {-1441, -124, -25, 1014, 1500, 660, 410, 245, 530};
  vector<int> result = smallestDifference(arrayOne, arrayTwo);
  for (int v : result)
  {
    cout << v << endl;
  }
  return 0;
}