#include <cmath>
#include <algorithm>
using namespace std;

// This is an input class. Do not edit.
class BinaryTree
{
public:
  int value;
  BinaryTree *left = nullptr;
  BinaryTree *right = nullptr;

  BinaryTree(int value) { this->value = value; }
};

struct TreeInfo
{
  bool isBalanced;
  int height;
};

TreeInfo getTreeInfo(BinaryTree *node)
{
  if (node == nullptr)
    return TreeInfo{true, -1};

  auto leftTree = getTreeInfo(node->left);
  auto rightTree = getTreeInfo(node->right);

  bool isBalanced = leftTree.isBalanced && rightTree.isBalanced && (abs(leftTree.height - rightTree.height) <= 1);

  int height = max(leftTree.height, rightTree.height) + 1;

  return TreeInfo{isBalanced, height};
}

bool heightBalancedBinaryTree(BinaryTree *tree)
{
  auto treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}
