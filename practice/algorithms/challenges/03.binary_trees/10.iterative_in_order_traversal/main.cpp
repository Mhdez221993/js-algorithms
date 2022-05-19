#include <vector>
using namespace std;

class BinaryTree
{
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;
  BinaryTree *parent;

  BinaryTree(int value, BinaryTree *parent = nullptr);
  void insert(vector<int> values, int i = 0);
};

void iterativeInOrderTraversal(BinaryTree *tree, void (*callback)(BinaryTree *tree))
{
  BinaryTree *previosNode = nullptr;
  BinaryTree *currNode = tree;

  while (currNode != nullptr)
  {
    BinaryTree *nextNode;
    if (previosNode == nullptr || previosNode == currNode->parent)
    {
      if (currNode->left != nullptr)
        nextNode = currNode->left;
      else
      {
        (*callback)(currNode);
        nextNode = currNode->right != nullptr ? currNode->right : currNode->parent;
      }
    }
    else if (previosNode == currNode->left)
    {
      (*callback)(currNode);
      nextNode = currNode->right != nullptr ? currNode->right : currNode->parent;
    }
    else
    {
      nextNode = currNode->parent;
    }

    previosNode = currNode;
    currNode = nextNode;
  }
}
