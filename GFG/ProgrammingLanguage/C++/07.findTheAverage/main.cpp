#include <bits/stdc++.h>
using namespace std;

// Take as input n numbers and find the average
int main()
{
  int n = 6;
  int arr[] = {2, 3, 1, 5, 6, 8};
  int sum = 0;
  for (int num : arr)
  {
    sum += num;
  }
  cout << (sum * 1.0) / n << endl;

  return 0;
}