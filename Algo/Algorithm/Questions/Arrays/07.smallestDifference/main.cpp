#include <vector>
#include <iostream>
#include <limits>
using namespace std;

vector<int> smallestDifference(vector<int> arrayOne, vector<int> arrayTwo) {
  vector<int> bestPair;
  int bestDiffence = numeric_limits<int>::max();
  int first = 0;
  int second = 0;
  while(first < arrayOne.size() || second < arrayOne.size())
  {
    int firstValue = arrayOne[first];
    int secondValue = arrayTwo[second];
    int absValue = abs(firstValue-secondValue);
    if(absValue < bestDiffence)
    {
      bestDiffence = absValue;
      bestPair = {firstValue, secondValue};
    }

    if(firstValue > secondValue)
    {
      second++;
    } else if(secondValue > firstValue)
    {
      first++;
    } else
    {
      return {firstValue, secondValue};
    }
  }

  return bestPair;
}

int main()
{
  vector<int> arrayOne = {-1, 5, 10, 20, 28, 3};
  vector<int> arrayTwo = {26, 134, 135, 15, 17};
  vector<int> result = smallestDifference(arrayOne, arrayTwo);
  for(int v: result)
  {
    cout << v << endl;
  }
  return 0;
}