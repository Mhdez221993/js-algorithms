// O(n) time | O(1) space - where n is the length of the array.
#include <vector>
#include <iostream>
using namespace std;

bool isMonotonic(vector<int> array)
{
  if (array.size() <= 2)
  {
    return true;
  }

  for (int i = 0; i < array.size() - 1; i++)
  {
    if (abs(array[i]) > abs(array[i + 1]))
      return false;

    if (array[i] * array[i + 1] < 0)
      return false;
  }

  return true;
}

int main()
{
  vector<int> array = {-1, -5, 10};
  cout << isMonotonic(array);
  cout << endl;
}
