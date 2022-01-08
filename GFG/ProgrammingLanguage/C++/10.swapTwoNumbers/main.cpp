#include <bits/stdc++.h>
using namespace std;

void swap(int &a, int &b)
{
  int tem = a;
  a = b;
  b = tem;
}

int main()
{
  int a = 10;
  int b = 2;

  swap(a, b);
  cout << "a: " << a << " "
       << "b: " << b << endl;
  return 0;
}