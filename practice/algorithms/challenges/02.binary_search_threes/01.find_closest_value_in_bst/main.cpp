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

int findClosestValueInBst(BST *tree, int target)
{
  BST *root = tree;
  int bestValue = root->value;
  while (root)
  {
    if (abs(target - root->value) < abs(target - bestValue))
      bestValue = root->value;
    if (target < root->value)
      root = root->left;
    else if (target > root->value)
      root = root->right;
    else
      break;
  }
  return bestValue;
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