#include <bits/stdc++.h>
using namespace std;

// Convert decimal number input by the user to binary
int main()
{
  int num_to_binary = 2;
  string binary;
  while (num_to_binary)
  {
    binary += (char)((num_to_binary & 1) + '0');
    num_to_binary >>= 1;
  }
  reverse(binary.begin(), binary.end());
  cout << binary << endl;

  return 0;
}