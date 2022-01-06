#include <bits/stdc++.h>
#include <iostream>
using namespace std;

// Write a program to count the number of digits of a number
int main()
{
  unsigned long long int num = 255657434267;
  int counter = 0;
  do
  {
    counter++;
    num /= 10;
  } while (num);

  cout << counter << endl;
  return 0;
}