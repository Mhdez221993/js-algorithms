#include <vector>
using namespace std;

// This is the class of the input root. Do not edit it.
class BinaryTree
{
public:
  int value;
  BinaryTree *left = nullptr;
  BinaryTree *right = nullptr;

  BinaryTree(int value);
};

void mutate(BinaryTree *node, BinaryTree *parent, bool isLeftChild)
{
  if (node == nullptr)
    return;

  BinaryTree *left = node->left;
  BinaryTree *right = node->right;
  mutate(left, node, true);

  if (parent == nullptr)
  {
    node->right = nullptr;
  }
  else if (isLeftChild)
  {
    node->right = parent->right;
  }
  else
  {
    if (parent->right == nullptr)
      node->right = nullptr;
    else
      node->right = parent->right->left;
  }

  mutate(right, node, false);
}

BinaryTree *rightSiblingTree(BinaryTree *root)
{
  mutate(root, nullptr, false);
  return root;
}
