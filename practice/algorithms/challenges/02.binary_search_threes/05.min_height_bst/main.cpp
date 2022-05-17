#include <vector>
using namespace std;

class BST
{
public:
  int value;
  BST *left;
  BST *right;

  BST(int value)
  {
    this->value = value;
    left = nullptr;
    right = nullptr;
  }

  void insert(int value)
  {
    if (value < this->value)
    {
      if (value < this->value)
      {
        if (left == nullptr)
          left = new BST(value);
        else
          left->insert(value);
      }
      else
      {
        if (right == nullptr)
          right = new BST(value);
        else
          right->insert(value);
      }
    }
  }
};

BST *minHeightBstHelper(vector<int> array, int start, int end)
{
  if (end < start)
    return nullptr;

  int middle = (start + end) / 2;
  BST *bst = new BST(array[middle]);

  bst->left = minHeightBstHelper(array, start, middle - 1);
  bst->right = minHeightBstHelper(array, middle + 1, end);

  return bst;
}

// O(n) time | O(n) space
BST *minHeightBst(vector<int> array)
{
  return minHeightBstHelper(array, 0, array.size() - 1);
}

// O(long(n)) time  | O(n) space
// BST *minHeightBstHelper(vector<int> array, BST *bst, int start, int end)
// {
//   if (end < start)
//     return nullptr;

//   int middle = (start + end) / 2;

//   if (bst == nullptr)
//   {
//     bst = new BST(array[middle]);
//   }
//   else
//   {
//     bst->insert(array[middle]);
//   }

//   minHeightBstHelper(array, bst, start, middle - 1);
//   minHeightBstHelper(array, bst, middle + 1, end);

//   return bst;
// }

// // O(n) time | O(n) space
// BST *minHeightBst(vector<int> array)
// {
//   return minHeightBstHelper(array, nullptr, 0, array.size() - 1);
// }
