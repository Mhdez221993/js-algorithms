#include <iostream>
using namespace std;

string isLeap(int N)
{
  if (N % 400 == 0)
    return "Is a leap year";
  if (N % 4 == 0 && N % 100 != 0)
    return "Is a leap year";
  return "Is not a leap year";
}

int main()
{
  int t;
  scanf("%d", &t);
  while (t--)
  {
    int N;
    scanf("%d", &N);
    printf("%s\n", isLeap(N).c_str());
  }
  return 0;
}
