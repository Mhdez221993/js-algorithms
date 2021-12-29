#include <iostream>
#include <vector>

using namespace std;

int numOfPathsToDest(int n)
{
  vector<vector<int>> moves(n, vector<int>(n, 0));
  moves[0][0] = 1;

  for (int i = 1; i < n; i++)
  {
    for (int j = 0; j <= i; j++)
    {

      if (i - 1 >= j)
      {
        moves[i][j] = moves[i - 1][j];
      }

      if (j - 1 >= 0)
      {
        moves[i][j] = moves[i][j] + moves[i][j - 1];
      }
    }
  }

  return moves[n - 1][n - 1];
}

// int numOfPathsToDest(int n)
// {
//   vector<vector<int>> array(n, vector<int>(n, 0));
//   array[0][0] = 1;
//   for (int i = 1; i < array.size(); i++)
//   {
//     for (int j = 0; j <= i; j++)
//     {
//       if (j == 0)
//       {
//         array[i][j] = 1;
//       }
//       else if (j == i)
//       {
//         array[i][j] = array[i][j - 1];
//       }
//       else
//       {
//         array[i][j] = array[i][j - 1] + array[i - 1][j];
//       }
//     }
//   }
//   return array[array.size() - 1][array.size() - 1];
// }

int main()
{
  int n = 4;
  cout << numOfPathsToDest(n) << endl;

  return 0;
}
