#include <bits/stdc++.h>
using namespace std;

void scientific(double a)
{
  cout << scientific << setprecision(4) << a;
}

int main()
{
  int t;

  cin >> t;

  while (t--)
  {
    double a;

    cin >> a;

    scientific(a);
    cout << endl;
  }
}