#include <vector>
using namespace std;

class BST
{
public:
  int value;
  int counter;
  BST *left;
  BST *right;

  BST(int value, int counter = 0)
  {
    this->value = value;
    this->counter = counter;
    left = nullptr;
    right = nullptr;
  }

  void insert(int val, int idx, vector<int> &rightSmaller, int numSmaller = 0)
  {
    if (val < value)
    {
      counter += 1;
      if (left == nullptr)
      {
        left = new BST(val);
        rightSmaller[idx] = numSmaller;
      }
      else
      {
        left->insert(val, idx, rightSmaller, numSmaller);
      }
    }
    else
    {
      numSmaller += counter;
      if (val > value)
        numSmaller += 1;

      if (right == nullptr)
      {
        right = new BST(val);
        rightSmaller[idx] = numSmaller;
      }
      else
      {
        right->insert(val, idx, rightSmaller, numSmaller);
      }
    }
  }
};

vector<int> rightSmallerThan(vector<int> array)
{
  if (array.size() == 0)
    return {};

  vector<int> rightSmaller(array.size());
  int lastIdx = array.size() - 1;
  BST *bst = new BST(array[lastIdx]);
  rightSmaller[lastIdx] = 0;

  for (int i = lastIdx - 1; i >= 0; i--)
    bst->insert(array[i], i, rightSmaller);

  return rightSmaller;
}
