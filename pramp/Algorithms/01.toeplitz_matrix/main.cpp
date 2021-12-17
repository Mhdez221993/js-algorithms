#include <iostream>
#include <vector>

using namespace std;

bool isToeplitz(const vector<vector<int>>& arr)
{
  if(arr.size() == 1){
    return true;
  }

  for(int i = 1; i < arr.size(); i++)
  {
    if(arr[i].size() == 1)
    {
      return true;
    }
    for(int j = 1; j < arr[i].size(); j++)
    {
      if(arr[i][j] != arr[i - 1][j - 1])
      {
        return false;
      }
    }
  }

  return true;
}



int main()
{
  vector<vector<int>> array_1 = {
    {1, 2, 3, 4},
    {5, 1, 2, 3},
    {6, 5, 1, 2}
  };

  vector<vector<int>> array_2 = {
    {1,2,3,4},
    {5,1,9,3},
    {6,5,1,2}
  };
  cout << isToeplitz(array_1) << endl;
  cout << isToeplitz(array_2) << endl;

  return 0;
}
