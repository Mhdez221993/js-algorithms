#include <vector>
#include <map>
#include <iostream>
using namespace std;

int firstDuplicateValue(vector<int> array)
{
  map<int, bool> myMap;
  for (int i = 0; i < array.size(); i++)
  {
    int value = array[i];
    if (!myMap[value])
    {
      myMap[value] = true;
    }
    else
    {
      return value;
    }
  }

  return -1;
}

int main()
{
  vector<int> array = {2, 1, 5, 2, 3, 3, 4};
  cout << firstDuplicateValue(array) << endl;
  return 0;
}