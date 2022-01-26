#include <bits/stdc++.h>
using namespace std;

class BST
{
public:
  int data;
  BST *left;
  BST *right;

  BST(int d)
  {
    data = d;
    left = NULL;
    right = NULL;
  }

  BST *insert(BST *root, int data)
  {
    if (root == NULL)
    {
      return new BST(data);
    }
    else
    {
      BST *cur;
      if (data <= root->data)
      {
        cur = insert(root->left, data);
        root->left = cur;
      }
      else
      {
        cur = insert(root->right, data);
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
    cout << root->data << " ";
    inorder(root->right);
  }
};

int findNum(BST *tree, int target, int num)
{
  if (tree == NULL)
    return num;

  int a = abs(target - tree->data);
  int b = abs(target - num);
  if (a < b)
    num = tree->data;

  if (tree->data < target)
    return findNum(tree->right, target, num);
  else
    return findNum(tree->left, target, num);
}

int findClosestdataueInBst(BST *tree, int target)
{
  return findNum(tree, target, INT_MAX);
}

int main()
{
  BST Tree(0);
  BST *root = NULL;
  vector<int> values = {10, 5, 15, 2, 5, 13, 22, 1, 14};
  for (int data : values)
    root = Tree.insert(root, data);
  // Tree.inorder(root);
  cout << findClosestdataueInBst(root, 12) << endl;
  return 0;
}