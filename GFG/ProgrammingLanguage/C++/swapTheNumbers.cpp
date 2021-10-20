#include <bits/stdc++.h>

using namespace std;

void swapNumbers(int &a, int &b)
{
  int temp = a;

  a = b;

  b = temp;
}

int main()
{
  int t;
  cin >> t;

  while (t--)
  {
    int a, b;

    cin >> a >> b;

    swapNumbers(a, b);

    cout << a << " " << b << endl;
  }
}