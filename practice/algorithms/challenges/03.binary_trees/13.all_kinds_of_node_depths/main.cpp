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

int allKindsOfNodeDepths(BinaryTree *root)
{
  return getTreeInfo(root).sumOfAllDepths;
}
