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

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
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
          root = root->right;
      }
    }

    return *this;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
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

  int getMinValue()
  {
    BST *current = this;

    while (current->left)
    {
      current = current->left;
    }

    return current->value;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  BST &remove(int val, BST *parent = nullptr)
  {
    BST *current = this;
    while (current != nullptr)
    {
      if (val < current->value)
      {
        parent = current;
        current = current->left;
      }
      else if (val > current->value)
      {
        parent = current;
        current = current->right;
      }
      else
      {
        if (current->left != nullptr && current->right != nullptr)
        {
          current->value = current->right->getMinValue();
          current->right->remove(current->value, current);
        }
        else if (parent == nullptr)
        {
          if (current->right)
          {
            current->value = current->right->value;
            current->left = current->right->left;
            current->right = current->right->right;
          }
          else if (left != nullptr)
          {
            current->value = current->left->value;
            current->left = current->left->left;
            current->right = current->left->right;
          }
          else
          {
          }
        }
        else if (parent->left == current)
        {
          parent->left = current->left ? current->left : current->right;
        }
        else if (parent->right == current)
        {
          parent->right = current->right ? current->right : current->left;
        }
        else
        {
          break;
        }
      }
    }

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
  cout << root->contains(10) << endl;
  root->remove(10);
  root->inorder(root);
  cout << endl;
  return 0;
}