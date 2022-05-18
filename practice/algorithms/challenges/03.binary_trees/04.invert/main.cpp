#include <vector>
#include <deque>
using namespace std;

class BinaryTree
{
public:
  int value;
  BinaryTree *left;
  BinaryTree *right;

  BinaryTree(int value);
  void insert(vector<int> values, int i = 0);
  void invertedInsert(vector<int> values, int i = 0);
};

void invertBinaryTree(BinaryTree *tree)
{
  deque<BinaryTree *> queue;
  queue.push_back(tree);

  while (queue.size() > 0)
  {
    BinaryTree *node = queue.front();
    queue.pop_front();

    if (node == nullptr)
      continue;

    swap(node->left, node->right);
    queue.push_back(node->left);
    queue.push_back(node->right);
  }
}

// void invertBinaryTree(BinaryTree *tree)
// {
//   if (!tree)
//     return;

//   swap(node->left, node->right);

//   invertBinaryTree(tree->left);
//   invertBinaryTree(tree->right);
// }
