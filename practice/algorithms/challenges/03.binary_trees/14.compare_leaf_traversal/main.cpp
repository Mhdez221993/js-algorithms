#include <vector>
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

bool isLeafNode(const BinaryTree *node)
{
  return (node->left == nullptr) && (node->right == nullptr);
}

BinaryTree *getNexLeafNode(vector<BinaryTree *> &stack)
{
  BinaryTree *currNode = stack.back();
  stack.pop_back();

  while (!isLeafNode(currNode))
  {
    if (currNode->right != nullptr)
      stack.push_back(currNode->right);

    if (currNode->left != nullptr)
      stack.push_back(currNode->left);

    currNode = stack.back();
    stack.pop_back();
  }

  return currNode;
}

bool compareLeafTraversal(BinaryTree *tree1, BinaryTree *tree2)
{
  vector<BinaryTree *> tree1TraversalStack = {tree1};
  vector<BinaryTree *> tree2TraversalStack = {tree2};

  while ((tree1TraversalStack.size() > 0) && (tree2TraversalStack.size() > 0))
  {
    BinaryTree *tree1Leaf = getNexLeafNode(tree1TraversalStack);
    BinaryTree *tree2Leaf = getNexLeafNode(tree2TraversalStack);

    if (tree1Leaf->value != tree2Leaf->value)
      return false;
  }

  return (tree1TraversalStack.size() == 0) && (tree2TraversalStack.size() == 0);
}
