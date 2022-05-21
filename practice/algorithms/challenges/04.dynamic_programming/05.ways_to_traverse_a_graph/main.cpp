#include <vector>
using namespace std;

// O(2^(n+m)) time | O(n + m) space
// int numberOfWaysToTraverseGraph(int width, int height)
// {
//   if (width == 1 || height == 1)
//     return 1;

//   return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
// }
