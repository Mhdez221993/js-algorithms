#include <vector>
using namespace std;

class BinaryTree
{
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;

  BinaryTree(int value);
  void insert(vector<int> values, int i = 0);
  void invertedInsert(vector<int> values, int i = 0);
};

void swapNodes(BinaryTree *tree)
{
  BinaryTree *temp = tree->left;
  tree->left = tree->right;
  tree->right = temp;
}

void invertBinaryTree(BinaryTree *tree)
{
  if (!tree)
    return;

  swapNodes(tree);

  invertBinaryTree(tree->left);
  invertBinaryTree(tree->right);
}
