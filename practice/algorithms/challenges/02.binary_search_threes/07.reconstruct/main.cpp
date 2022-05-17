#include <vector>
using namespace std;

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

BST *reconstructBst(vector<int> preOrderTraversalValues)
{
  if (preOrderTraversalValues.size() == 0)
    return nullptr;

  int currValue = preOrderTraversalValues[0];
  int rightIdx = preOrderTraversalValues.size();

  for (int i = 1; i < preOrderTraversalValues.size(); i++)
  {
    int value = preOrderTraversalValues[i];
    if (value >= currValue)
    {
      rightIdx = i;
      break;
    }
  }

  auto leftSubtree = reconstructBst(vector<int>(preOrderTraversalValues.begin() + 1, preOrderTraversalValues.begin() + rightIdx));

  auto rightSubtree = reconstructBst(vector<int>(preOrderTraversalValues.begin() + rightIdx, preOrderTraversalValues.end()));

  auto bst = new BST(currValue);
  bst->left = leftSubtree;

  bst->right = rightSubtree;
  return bst;
}