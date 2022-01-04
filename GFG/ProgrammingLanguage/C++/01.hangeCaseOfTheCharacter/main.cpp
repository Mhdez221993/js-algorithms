#include <bits/stdc++.h>
using namespace std;

// Change the case of the character entered. (using operators only).
int main()
{
  char ch1 = 'p';
  char ch2 = 'P';
  cout << "Char p chande to: " << (char)(ch1 >= 'a' && ch1 <= 'z' ? (ch1 - 'a' + 'A') : (ch1 - 'A' + 'a')) << endl;
  cout << "Char p chande to: " << (char)(ch2 >= 'a' && ch2 <= 'z' ? (ch2 - 'a' + 'A') : (ch2 - 'A' + 'a')) << endl;
  return 0;
}
