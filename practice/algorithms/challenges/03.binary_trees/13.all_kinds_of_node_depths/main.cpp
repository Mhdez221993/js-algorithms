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

struct TreeInfo
{
  int numOfNodes;
  int sumOfDepths;
  int sumOfAllDepths;
};

TreeInfo getTreeInfo(BinaryTree *node)
{
  if (node == nullptr)
    return TreeInfo{0, 0, 0};

  TreeInfo leftInfo = getTreeInfo(node->left);
  TreeInfo rightInfo = getTreeInfo(node->right);

  int sumOfLefDepths = leftInfo.sumOfDepths + leftInfo.numOfNodes;
  int sumOfRightDepths = rightInfo.sumOfDepths + rightInfo.numOfNodes;

  int sumOfNodes = 1 + leftInfo.numOfNodes + rightInfo.numOfNodes;
  int sumOfDepths = sumOfLefDepths + sumOfRightDepths;
  int sumOfAllDepths = sumOfDepths + leftInfo.sumOfAllDepths + rightInfo.sumOfAllDepths;

  return TreeInfo{sumOfNodes, sumOfDepths, sumOfAllDepths};
}

// O(n) time | O(1) space
int allKindsOfNodeDepths(BinaryTree *root)
{
  return getTreeInfo(root).sumOfAllDepths;
}

// O(nlog(n)) time | O(n) space
// int nodeDepths(BinaryTree *node, int depth = 0)
// {
//   if (node == nullptr)
//     return 0;

//   return depth + nodeDepths(node->left, depth + 1) + nodeDepths(node->right, depth + 1);
// }

// int allKindsOfNodeDepths(BinaryTree *root)
// {
//   int sumOfAllDepths = 0;

//   vector<BinaryTree *> stack = {root};
//   while (stack.size() > 0)
//   {
//     BinaryTree *node = stack.back();
//     stack.pop_back();
//     if (node == nullptr)
//       continue;

//     sumOfAllDepths += nodeDepths(node);
//     stack.push_back(node->left);
//     stack.push_back(node->right);
//   }

//   return sumOfAllDepths;
// }
