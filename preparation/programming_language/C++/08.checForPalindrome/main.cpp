#include <bits/stdc++.h>
using namespace std;

void check_palindrome(string str)
{
  int len = str.length();
  for (int i = 0; i < len; i++)
  {
    if (str[i] != str[len - 1 - i])
    {
      cout << "String " << str << " is a not palindrome" << endl;
      return;
    }
  }
  cout << "String " << str << " is a palindrome" << endl;
}

int main()
{
  string str1 = "kayak";
  string str2 = "kappa";
  check_palindrome(str1);
  check_palindrome(str2);
  return 0;
}