// O(n) time | O(n) space - where n is the length of the input array.
#include <vector>
#include <iostream>

using namespace std;

vector<int> arrayOfProducts(vector<int> array)
{
  vector<int> newArr(array.size(), 1);
  int currProduct = 1;
  for (int i = 0; i < array.size(); i++)
  {
    newArr[i] *= currProduct;
    currProduct *= array[i];
  }

  currProduct = 1;
  for (int i = (array.size() - 1); i >= 0; i--)
  {
    newArr[i] *= currProduct;
    currProduct *= array[i];
  }

  return newArr;
}

int main()
{
  vector<int> array = {5, 1, 4, 2};
  vector<int> results = arrayOfProducts(array);
  for (int x : results)
  {
    cout << x << endl;
  }

  return 0;
}