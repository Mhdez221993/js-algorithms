#include <algorithm>
using namespace std;

// This is an input class. Do not edit.
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

struct TreeInfo
{
  int diameter;
  int height;
};

TreeInfo getTreeInfo(BinaryTree *tree)
{
  if (tree == nullptr)
    return TreeInfo{0, 0};

  TreeInfo leftTree = getTreeInfo(tree->left);
  TreeInfo rightTree = getTreeInfo(tree->right);

  int longestPath = leftTree.height + rightTree.height;
  int maxDiameter = max(leftTree.diameter, rightTree.diameter);
  int currDiameter = max(longestPath, maxDiameter);
  int currHeight = 1 + max(leftTree.height, rightTree.height);

  return TreeInfo{currDiameter, currHeight};
}

int binaryTreeDiameter(BinaryTree *tree)
{
  return getTreeInfo(tree).diameter;
}
