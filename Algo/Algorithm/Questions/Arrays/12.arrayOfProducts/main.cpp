#include <vector>
#include <iostream>

using namespace std;

vector<int> arrayOfProducts(vector<int> array)
{
  // Write your code here.
  return array;
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