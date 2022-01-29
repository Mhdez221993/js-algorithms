#include <bits/stdc++.h>
using namespace std;

class BST
{
public:
  int value;
  BST *left;
  BST *right;

  BST(int d)
  {
    value = d;
    left = NULL;
    right = NULL;
  }

  BST *insert(BST *root, int value)
  {
    if (root == NULL)
    {
      return new BST(value);
    }
    else
    {
      BST *cur;
      if (value <= root->value)
      {
        cur = insert(root->left, value);
        root->left = cur;
      }
      else
      {
        cur = insert(root->right, value);
        root->right = cur;
      }
      return root;
    }
  }

  void inorder(BST *root)
  {
    if (root == NULL)
      return;

    inorder(root->left);
    cout << root->value << " ";
    inorder(root->right);
  }
};

int findClosestValueInBstHelper(BST *tree, int target, int closest)
{
  if (abs(target - tree->value) < abs(target - closest))
    closest = tree->value;
  if (target > tree->value && tree->right != nullptr)
    return findClosestValueInBstHelper(tree->right, target, closest);
  else if (target < tree->value && tree->left != nullptr)
    return findClosestValueInBstHelper(tree->left, target, closest);
  else
    return closest;
}

int findClosestValueInBst(BST *tree, int target)
{
  return findClosestValueInBstHelper(tree, target, tree->value);
}

int main()
{
  BST Tree(0);
  BST *root = NULL;
  vector<int> values = {10, 5, 15, 2, 5, 13, 22, 1, 14};
  for (int value : values)
    root = Tree.insert(root, value);
  // Tree.inorder(root);
  cout << findClosestValueInBst(root, 12) << endl;
  return 0;
}