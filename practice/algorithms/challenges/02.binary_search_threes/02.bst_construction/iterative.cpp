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
    BST *root = this;
    while (true)
    {
      if (val < root->value)
      {
        if (root->left == nullptr)
        {
          root->left = new BST(val);
          break;
        }
        else
          root = root->left;
      }
      else
      {
        if (root->right == nullptr)
        {
          root->right = new BST(val);
          break;
        }
        else
          right = root->right;
      }
    }

    return *this;
  }

  bool contains(int val)
  {
    BST *root = this;

    while (root)
    {
      if (val == root->value)
        return true;

      else if (val > root->value)
        root = root->right;

      else if (val < root->value)
        root = root->left;
    }

    return false;
  }

  BST &remove(int val)
  {

    return *this;
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