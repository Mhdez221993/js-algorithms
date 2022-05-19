#include <vector>
#include <climits>
using namespace std;

class BinaryTree
{
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;

  BinaryTree(int value);
  void insert(vector<int> values, int i = 0);
};

struct TreeInfo
{
  int maxBranch;
  int maxPath;
};

TreeInfo findMaxPathSum(BinaryTree *node)
{
  if (node == nullptr)
    return TreeInfo{0, INT_MIN};

  TreeInfo lefBranch = findMaxPathSum(node->left);
  TreeInfo rightBranch = findMaxPathSum(node->right);

  int maxChildBranch = max(lefBranch.maxBranch, rightBranch.maxBranch);

  int value = node->value;

  int maxSumAsBranch = max((maxChildBranch + value), value);

  int maxSumAsRootNode = max((lefBranch.maxBranch + value + rightBranch.maxBranch), maxSumAsBranch);

  int maxPathSum = max(lefBranch.maxPath, max(rightBranch.maxPath, maxSumAsRootNode));

  return TreeInfo{maxSumAsBranch, maxPathSum};
}

int maxPathSum(BinaryTree tree)
{
  return findMaxPathSum(&tree).maxPath;
}
