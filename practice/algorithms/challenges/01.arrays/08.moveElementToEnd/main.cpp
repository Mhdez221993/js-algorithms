// O(n) time | O(1) space - where n is the length of the array
#include <vector>
#include <iostream>
using namespace std;

vector<int> moveElementToEnd(vector<int> array, int toMove)
{
  // Write your code here.
  int i = 0;
  int j = array.size() - 1;
  while (i < j)
  {
    while (i < j && array[j] == toMove)
      j--;

    if (array[i] == toMove)
      swap(array[i], array[j]);
    i++;
  }

  return array;
}

int main()
{
  vector<int> array = {2, 1, 2, 2, 2, 3, 4, 2};
  int toMove = 2;
  vector<int> newArr = moveElementToEnd(array, toMove);
  for (int i : newArr)
  {
    cout << i << " ";
  }
  cout << endl;
}
