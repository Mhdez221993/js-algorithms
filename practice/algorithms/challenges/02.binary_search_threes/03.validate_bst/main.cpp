#include <limits>
using namespace std;

class BST
{
public:
  int value;
  BST *left;
  BST *right;

  BST(int val);
  BST &insert(int val);
};

// O(n) time | O(d) space where d is the depth of the tree
bool validateBst(BST *tree)
{
  return validateBstHelper(tree, numeric_limits<int>::min(), numeric_limits<int>::max());
}

bool validateBstHelper(BST *tree, int min, int max)
{
  if (!tree)
    return true;

  if (tree->value < min || tree->value >= max)
    return false;

  bool leftValid = validateBstHelper(tree->left, min, tree->value);

  return leftValid && validateBstHelper(tree->right, tree->value, max);
}
