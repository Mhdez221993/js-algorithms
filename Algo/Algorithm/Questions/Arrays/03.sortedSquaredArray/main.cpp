#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

vector<int> sortedSquaredArray(vector<int> array) {
  vector<int> newArray = {};
  for(int i = 0; i < array.size(); i++){
    newArray.push_back(array[i] * array[i]);
  }
  sort(newArray.begin(), newArray.end());
  return newArray;
}

int main()
{
  vector<int> array = {1, 4, 9, 25, 36, 64, 81};
  vector<int> squeres = sortedSquaredArray(array);
  for(int x: squeres){
    cout << x << endl;
  }
  return 0;
}
