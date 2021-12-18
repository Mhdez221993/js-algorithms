#include <iostream>
#include <vector>

using namespace std;

int numOfPathsToDest(int n)
{
  vector<vector<int>> moves( n , vector<int> (n, 0));
  moves[0][0] = 1;

  for(int i = 1; i < n; i++)
  {
    for(int j = 0; j <= i; j++)
    {

      if(i - 1 >= j)
      {
        moves[i][j] = moves[i - 1][j];
      }

      if(j - 1 >= 0)
      {
        moves[i][j] = moves[i][j] + moves[i][j - 1];
      }
    }
  }

  return moves[n - 1][n - 1];
}

int main()
{
  int n = 4;
  cout << numOfPathsToDest(n) << endl;

  return 0;
}
