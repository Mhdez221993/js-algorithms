#include <unordered_map>
#include <utility>
#include <deque>
#include <unordered_set>
#include <vector>
using namespace std;

class BinaryTree
{
public:
  int value;
  BinaryTree *left = nullptr;
  BinaryTree *right = nullptr;

  BinaryTree(int value)
  {
    this->value = value;
  }
};

void populateNodesToParents(BinaryTree *node, unordered_map<int, BinaryTree *> &nodesToParents, BinaryTree *parent)
{
  if (node != nullptr)
  {
    nodesToParents[node->value] = parent;
    populateNodesToParents(node->left, nodesToParents, node);
    populateNodesToParents(node->right, nodesToParents, node);
  }
}

BinaryTree *getNodeFromValue(int value, BinaryTree *tree, unordered_map<int, BinaryTree *> nodeToParents)
{
  if (tree->value == value)
    return tree;

  auto nodeParent = nodeToParents[value];

  if (nodeParent->left != nullptr && nodeParent->left->value == value)
    return nodeParent->left;

  return nodeParent->right;
}

vector<int> breadthFirstSerarchForNodesDistancesK(BinaryTree *targetNode, unordered_map<int, BinaryTree *> &nodesToParents, int k)
{
  deque<pair<BinaryTree *, int>> queue = {pair<BinaryTree *, int>(targetNode, 0)};
  unordered_set<int> seen = {targetNode->value};

  while (queue.size() > 0)
  {
    auto currNode = queue.front().first;
    auto distanceFromTarget = queue.front().second;
    queue.pop_front();

    if (distanceFromTarget == k)
    {
      vector<int> nodesDistanceK;
      for (auto item : queue)
        nodesDistanceK.push_back(item.first->value);

      nodesDistanceK.push_back(currNode->value);
      return nodesDistanceK;
    }

    vector<BinaryTree *> connectedNodes = {
        currNode->left,
        currNode->right,
        nodesToParents[currNode->value],
    };

    for (auto node : connectedNodes)
    {
      if (node == nullptr)
        continue;

      if (seen.find(node->value) != seen.end())
        continue;

      seen.insert(node->value);
      queue.push_back(pair<BinaryTree *, int>(node, distanceFromTarget + 1));
    }
  }

  return {};
}

vector<int> findNodesDistanceK(BinaryTree *tree, int target, int k)
{
  unordered_map<int, BinaryTree *> nodesToParents;
  populateNodesToParents(tree, nodesToParents, nullptr);
  auto targetNode = getNodeFromValue(target, tree, nodesToParents);

  return breadthFirstSerarchForNodesDistancesK(targetNode, nodesToParents, k);
}
