#include <vector>
using namespace std;

// This is an input class. Do not edit.
class BinaryTree
{
public:
  int value;
  BinaryTree *left = nullptr;
  BinaryTree *right = nullptr;
  BinaryTree *parent = nullptr;

  BinaryTree(int value) { this->value = value; }
};

BinaryTree *getLeftChild(BinaryTree *node)
{
  BinaryTree *currNode = node;
  while (currNode->left)
  {
    currNode = currNode->left;
  }

  return currNode;
}

BinaryTree *getRightParent(BinaryTree *node)
{
  BinaryTree *currNode = node;

  while (currNode->parent && currNode->parent->right == currNode)
  {
    currNode = currNode->parent;
  }

  return currNode->parent;
}

BinaryTree *findSuccessor(BinaryTree *tree, BinaryTree *node)
{
  if (node->right != nullptr)
    return getLeftChild(node->right);

  return getRightParent(node);
}

// void getInOrder(BinaryTree *root, vector<BinaryTree *> &order)
// {
//   if (root == nullptr)
//     return;

//   getInOrder(root->left, order);
//   order.push_back(root);
//   getInOrder(root->right, order);
// }

// BinaryTree *findSuccessor(BinaryTree *tree, BinaryTree *node)
// {
//   vector<BinaryTree *> inOrderTraversal;
//   getInOrder(tree, inOrderTraversal);

//   for (int i = 0; i < inOrderTraversal.size(); i++)
//   {
//     if (inOrderTraversal[i] != node)
//       continue;

//     if (i == inOrderTraversal.size() - 1)
//       return nullptr;

//     return inOrderTraversal[i + 1];
//   }
//   return nullptr;
// }
