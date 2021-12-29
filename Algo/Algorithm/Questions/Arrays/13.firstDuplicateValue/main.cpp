#include <vector>
#include <iostream>
#include <cstdlib>
using namespace std;

int firstDuplicateValue(vector<int> array)
{
  for (int i = 0; i < array.size(); i++)
  {
    int currValue = array[i];
    int index = abs(currValue) - 1;
    if (array[index] < 0)
    {
      return abs(array[i]);
    }
    else
    {
      array[index] *= -1;
    }
  }

  return -1;
}

int main()
{
  vector<int> array = {5, 5, 3, 3, 4};
  cout << firstDuplicateValue(array) << endl;
  return 0;
}