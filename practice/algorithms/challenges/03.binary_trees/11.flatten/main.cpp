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

vector<BinaryTree *> getNodesInOrder(BinaryTree *node, vector<BinaryTree *> *array)
{
  if (node != nullptr)
  {
    getNodesInOrder(node->left, array);
    array->push_back(node);
    getNodesInOrder(node->right, array);
  }

  return *array;
}

BinaryTree *flattenBinaryTree(BinaryTree *root)
{
  vector<BinaryTree *> inOrderNodes = getNodesInOrder(root, new vector<BinaryTree *>{});

  for (int i = 0; i < inOrderNodes.size() - 1; i++)
  {
    BinaryTree *leftNode = inOrderNodes[i];
    BinaryTree *rightNode = inOrderNodes[i + 1];
    leftNode->right = rightNode;
    rightNode->left = leftNode;
  }

  return inOrderNodes[0];
}
