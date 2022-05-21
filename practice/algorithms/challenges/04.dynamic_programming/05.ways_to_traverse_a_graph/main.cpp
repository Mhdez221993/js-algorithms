#include <vector>
using namespace std;

// O(2^(n+m)) time | O(n + m) space
// int numberOfWaysToTraverseGraph(int width, int height)
// {
//   if (width == 1 || height == 1)
//     return 1;

//   return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
// }

// O((n*m)) time | O(n * m) space
int numberOfWaysToTraverseGraph(int width, int height)
{
  vector<vector<int>> numberOfWays(height, vector<int>(width, 1));

  for (int row = 1; row < height; row++)
  {
    for (int col = 1; col < width; col++)
    {
      int left = numberOfWays[row][col - 1];
      int up = numberOfWays[row - 1][col];
      numberOfWays[row][col] = left + up;
    }
  }

  return numberOfWays[height - 1][width - 1];
}

// int factorial(int num)
// {
//   int result = 1;

//   for (int i = 2; i <= num; i++)
//     result *= i;

//   return result;
// }

// O((n+m)) time | O(1) space
// int numberOfWaysToTraverseGraph(int width, int height)
// {
//   int xDistanceToCorner = width - 1;
//   int yDistanceToCorner = height - 1;

//   int numerator = factorial(xDistanceToCorner + yDistanceToCorner);
//   int denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);

//   return numerator / denominator;
// }
