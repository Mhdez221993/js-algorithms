## All Kinds Of Node Depths

![](all_kind_of_nodes_dephts.PNG)

  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.

  Write a function that takes in a Binary Tree and returns the sum of all of
  its subtrees' nodes' depths.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

## Sample Input

<pre><span class="CodeEditor-promptParameter">tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9
</pre>

## Sample Output

<pre>
  26
  // The sum of the root tree's node depths is 16.
  // The sum of the tree rooted at 2's node depths is 6.
  // The sum of the tree rooted at 3's node depths is 2.
  // The sum of the tree rooted at 4's node depths is 2.
  // Summing all of these sums yields 26.
</pre>

## Hint 1

  You can calculate the sum of a tree's node depths with a simple recursive function. Iterate through every node in the tree, call the simple recursive function on each node to caculate the sum of the node depths of the tree rooted at the node in question, and add up all of the sums to obtain the final sum.

## Hint 2

  You can solve this question in linear time by coming up with a relation between a tree's sum of node depths and the sums of node depths of the trees rooted at its left and right child nodes.

## Hint 3

  The depth of a node relative to a node X is 1 value smaller than its depth relative to node X's parent node Y. It follows that, if a subtree rooted at node X has a sum of node depths S, you can get the sum of those node depths relative to node Y by calculating: S + number-of-nodes-in-subtree-rooted-at-X, since this effectively increments all of the node depths relative to node X by 1.

## Hint 4

  From Hint #3, we can deduce the formula: nodeDepths(node) = nodeDepths(node.left) + numberOfNodesInLeftSubtree + nodeDepths(node.right) + numberOfNodesInRightSubtree. We can easily count the number of nodes in each subtree with a single pass in the input tree, and then we can apply this formula to calculate all of the node depths in linear time and finally sum them up.

## Optimal Space & Time Complexity

  Average case: when the tree is balanced
  O(n) time | O(h) space - where n is the number of nodes in the Binary Tree and h is the height of the Binary Tree
