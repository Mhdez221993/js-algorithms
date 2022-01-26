#include <bits/stdc++.h>
using namespace std;

// Write a program simulating a calculator
int main()
{
  while (true)
  {
    int int1, int2;
    char operation;
    cin >> operation;

    if (operation == 'Q')
      break;

    cin >> int1 >> int2;
    switch (operation)
    {
    case '+':
      cout << int1 + int2 << endl;
      break;
    case '-':
      cout << int1 - int2 << endl;
      break;
    case '*':
      cout << (int1) * (int2) << endl;
      break;
    case '/':
      cout << int1 / int2 << endl;
      break;
    default:
      cout << "Invalid operator" << endl;
    }
  }

  return 0;
}
