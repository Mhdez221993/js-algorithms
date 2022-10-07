// O(n) time | O(n) space - where n is the length of the input array
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

vector<int> sortedSquaredArray(vector<int> array)
{
  vector<int> sortedSqueres(array.size(), 0);
  for (int i = 0; i < array.size(); i++)
  {
    int value = array[i];
    sortedSqueres[i] = value * value;
  }

  sort(sortedSqueres.begin(), sortedSqueres.end());
  return sortedSqueres;
}

int main()
{
  vector<int> array = {1, 4, 9, 25, 36, 64, 81};
  vector<int> squeres = sortedSquaredArray(array);
  for (int x : squeres)
  {
    cout << x << endl;
  }
  return 0;
}
