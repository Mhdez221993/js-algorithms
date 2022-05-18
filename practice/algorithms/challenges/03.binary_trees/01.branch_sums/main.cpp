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

void calculateBranchSums(BinaryTree *node, int runningSum, vector<int> &sums)
{
  if (!node)
    return;

  runningSum += node->value;
  if (node->left == nullptr && node->right == nullptr)
  {
    sums.push_back(runningSum);
    return;
  }

  calculateBranchSums(node->left, runningSum, sums);
  calculateBranchSums(node->right, runningSum, sums);
}

vector<int> branchSums(BinaryTree *root)
{
  vector<int> sums;
  calculateBranchSums(root, 0, sums);

  return sums;
}