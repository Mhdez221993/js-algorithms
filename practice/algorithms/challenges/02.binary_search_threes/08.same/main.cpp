#include <vector>

using namespace std;

vector<int> getSmaller(vector<int> array)
{
  vector<int> smaller = {};
  for (int i = 1; i < array.size(); i++)
  {
    if (array[i] < array[0])
      smaller.push_back(array[i]);
  }

  return smaller;
}

vector<int> getBigger(vector<int> array)
{
  vector<int> bigger = {};
  for (int i = 1; i < array.size(); i++)
  {
    if (array[i] >= array[0])
      bigger.push_back(array[i]);
  }

  return bigger;
}

bool sameBsts(vector<int> arrayOne, vector<int> arrayTwo)
{
  if (arrayOne.size() != arrayTwo.size())
    return false;

  if (arrayOne.size() == 0 && arrayTwo.size() == 0)
    return true;

  if (arrayOne[0] != arrayTwo[0])
    return false;

  vector<int> leftOne = getSmaller(arrayOne);
  vector<int> leftTwo = getSmaller(arrayTwo);
  vector<int> rightOne = getBigger(arrayOne);
  vector<int> rightTwo = getBigger(arrayTwo);

  return sameBsts(leftOne, leftTwo) &&
         sameBsts(rightOne, rightTwo);
}
