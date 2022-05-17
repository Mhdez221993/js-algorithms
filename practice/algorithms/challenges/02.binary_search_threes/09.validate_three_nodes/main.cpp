using namespace std;

// This is an input class. Do not edit.
class BST
{
public:
  int value;
  BST *left = nullptr;
  BST *right = nullptr;

  BST(int value)
  {
    this->value = value;
  }
};

bool isDesc(BST *node, BST *target)
{
  if (node == nullptr)
    return false;

  if (node == target)
    return true;

  if (target->value < node->value)
    return isDesc(node->left, target);
  else
    return isDesc(node->right, target);
}

bool validateThreeNodes(BST *nodeOne, BST *nodeTwo, BST *nodeThree)
{
  if (isDesc(nodeTwo, nodeOne))
    return isDesc(nodeThree, nodeTwo);

  if (isDesc(nodeTwo, nodeThree))
    return isDesc(nodeOne, nodeTwo);

  return false;
}
