#include <vector>
using namespace std;

class BinaryTree
{
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;

  BinaryTree(int value)
  {
    this->value = value;
    left = nullptr;
    right = nullptr;
  }
};

// O(n) time | O(h) space
int nodeDepths(BinaryTree *root, int sum = 0)
{
  if (!root)
    return 0;
  return sum + nodeDepths(root->left, sum + 1) + nodeDepths(root->right, sum + 1);
}

// struct Level
// {
//   BinaryTree *root;
//   int depth;
// };

// // O(n) time | O(h) space
// int nodeDepths(BinaryTree *root)
// {
//   int sumOfDepths = 0;
//   vector<Level> stack = {{root, 0}};

//   while (stack.size() > 0)
//   {
//     BinaryTree *node = stack.back().root;
//     int depth = stack.back().depth;
//     stack.pop_back();

//     if (!node)
//       continue;

//     sumOfDepths += depth;
//     stack.push_back(Level{node->left, depth + 1});
//     stack.push_back(Level{node->right, depth + 1});
//   }

//   return sumOfDepths;
// }
