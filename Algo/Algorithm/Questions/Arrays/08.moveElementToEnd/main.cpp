// O(n) time | O(1) space - where n is the length of the array
#include <vector>
#include <iostream>
using namespace std;
void swapNumbers(vector<int> &array, int leftIdx, int rightIndx)
{
  int tempA = array[leftIdx];
  array[leftIdx] = array[rightIndx];
  array[rightIndx] = tempA;
}

vector<int> moveElementToEnd(vector<int> array, int toMove)
{
  // Write your code here.
  int left = 0;
  int right = array.size() - 1;
  while (left < right)
  {
    if (array[left] == toMove && array[right] != toMove)
    {
      swapNumbers(array, left, right);
      left++;
      right--;
      continue;
    }

    if (array[left] != toMove)
    {
      left++;
    }

    if (array[right] == toMove)
    {
      right--;
    }
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
