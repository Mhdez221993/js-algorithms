#include <iostream>
using namespace std;

int digitalRoot(int n)
{
  int sum = 0;
  while (n)
  {
    sum += n % 10;
    n = n / 10;
  }
  if (sum > 9)
    return digitalRoot(sum);
  return sum;
}

int main()
{
  cout << digitalRoot(99999) << endl;
  return 0;
}