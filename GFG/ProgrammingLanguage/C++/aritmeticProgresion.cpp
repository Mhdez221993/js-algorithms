#include <bits/stdc++.h>

using namespace std;

void utility(int a, int d, int n)
{
  int ans = a + (n - 1) * d;

  cout << ans << endl;
}

int main()
{
  int t;

  cin >> t;

  while (t--)
  {
    int a, d, n;

    cin >> a >> d >> n;

    utility(a, d, n);
    cout << endl;
  }
}