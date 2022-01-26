#include <bits/stdc++.h>
using namespace std;

// Take user input amount of money and consider an infinite supply of denominations 1, 20, 50 and 100. What is the minimum number of denominations to make the change?
int main()
{
  int money, curr = 0, ans = 0;
  cin >> money;
  cout << "Money: " << money << "  curr: " << curr << "  ans: " << ans << endl;

  curr = money / 100;
  ans += curr;
  money %= 100;
  cout << "Money: " << money << "  curr: " << curr << "  ans: " << ans << endl;

  curr = money / 50;
  ans += curr;
  money %= 50;
  cout << "Money: " << money << "  curr: " << curr << "  ans: " << ans << endl;

  curr = money / 20;
  ans += curr;
  money %= 20;
  cout << "Money: " << money << "  curr: " << curr << "  ans: " << ans << endl;

  ans += money;

  cout << "The minimun amount of denominations for: " << money << " is " << ans << endl;
  return 0;
}
