#include <vector>
#include <iostream>
using namespace std;

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST
{
public:
  int value;
  BST *left;
  BST *right;

  BST(int val)
  {
    value = val;
    left = nullptr;
    right = nullptr;
  }

  BST &insert(int val)
  {
    if (val < value)
    {
      if (left == nullptr)
        left = new BST(val);
      else
        left->insert(val);
    }
    else
    {
      if (right == nullptr)
        right = new BST(val);
      else
        right->insert(val);
    }

    return *this;
  }

  bool contains(int val)
  {
    if (val == value)
      return true;
    else if (val > value && right != nullptr)
      return right->contains(val);
    else if (val < value && right != nullptr)
      return left->contains(val);

    return false;
  }

  BST &remove(int val)
  {
    // Write your code here.
    // Do not edit the return statement of this method.
    return *this;
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

int main()
{
  vector<int> values = {1, 2, 3, 4, 6, 7, 8, 9, 10, 11};
  BST *root = new BST(5);
  for (int val : values)
    root->insert(val);
  cout << root->contains(15) << endl;
  return 0;
}