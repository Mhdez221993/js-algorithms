#include <vector>
#include <unordered_map>
using namespace std;

// This is an input class. Do not edit.
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

void inOrderTraversal(BST *node, int k, vector<int> &array)
{
  if (!node || array[0] >= k)
    return;

  inOrderTraversal(node->right, k, array);
  if (array[0] < k)
  {
    array[0] += 1;
    array[1] = node->value;
    inOrderTraversal(node->left, k, array);
  }
}

// O(n) time | O(n) space
int findKthLargestValueInBst(BST *tree, int k)
{
  vector<int> sortedNodes = {0, 0};
  inOrderTraversal(tree, k, sortedNodes);
  return sortedNodes[1];
}

// void inOrderTraversal(BST *node, vector<int> &array)
// {
//   if (!node)
//     return;

//   inOrderTraversal(node->left, array);
//   array.push_back(node->value);
//   inOrderTraversal(node->right, array);
// }

// // O(n) time | O(n) space
// int findKthLargestValueInBst(BST *tree, int k)
// {
//   vector<int> sortedNodes = {};
//   inOrderTraversal(tree, sortedNodes);
//   return sortedNodes[sortedNodes.size() - k];
// }